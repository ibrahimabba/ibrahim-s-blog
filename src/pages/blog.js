import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import { Card, Spinner } from 'react-bootstrap';
import { spinner, detailText } from './page-styles/post.module.css';
import { Link } from '../components/LinkWithPrevUrl';

const BlogPage = () => {
  const [loading, setLoading] = useState(false);

  const [posts, setPosts] = useState([]);

  const fetchPost = async () => {
    setLoading(true);
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

    setLoading(false);
    setPosts(blogPosts);
  };
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <Layout pageTitle="My blogs">
      {loading ? (
        <div className={spinner}>
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
              <p className={detailText}>{post.details}</p>
              <Link to="/details/" state={{ post: post }}>
                View Post
              </Link>
            </Card.Body>
          </Card>
        ))
      )}
    </Layout>
  );
};

export default BlogPage;
