import * as React from 'react';
import Layout from '../components/layout';

const BlogDetail = ({ location }) => {
  const post = location.state.post;
  return (
    <Layout pageTitle="">
      <div>
        <h3>{post.title}</h3>
        <h6 style={{ fontSize: 12 }}>Created {post.created}</h6>
        <p style={{ marginTop: 40 }}>{post.details}</p>
      </div>
    </Layout>
  );
};

export default BlogDetail;
