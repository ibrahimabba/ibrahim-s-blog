import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import { Card, Spinner } from 'react-bootstrap';
import { spinner } from './page-styles/post.module.css';
import { Link } from 'gatsby';

const AboutPage = () => {
  const [loading, setLoading] = useState(false);

  const [posts, setPosts] = useState([]);

  const fetchPost = async () => {
    const response = await fetch('https://personal-blog-978b9-default-rtdb.firebaseio.com/posts.json');
    const resData = await response.json();

    let blogPosts = [];
    for (const key in resData) {
      blogPosts.push({
        id: key,
        title: resData[key].title,
        details: resData[key].details,
        created: resData[key].created,
      });
    }

    setPosts(blogPosts);
  };
  console.log(posts);

  useEffect(() => {
    setLoading(true);
    fetchPost();
    setLoading(false);
  });

  return (
    <Layout pageTitle="My blogs">
      <>
        {loading ? (
          <div style={spinner}>
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" />
          </div>
        ) : (
          posts.map((post) => (
            <Card key={post.id} style={{ width: '70%', margin: '2%' }}>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle style={{ fontSize: 12 }} className="mb-2 text-muted">
                  {post.created}
                </Card.Subtitle>
                <Card.Text>{post.details}</Card.Text>
                <Link to="/details" state={{ post: post }}>
                  View
                </Link>
              </Card.Body>
            </Card>
          ))
        )}
      </>
    </Layout>
  );
};

export default AboutPage;