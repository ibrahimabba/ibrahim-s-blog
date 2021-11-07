import * as React from 'react';
import Layout from '../components/layout';

const createdStyle = { fontSize: 12 };
const detailStyle = { marginTop: 40 };

const BlogDetail = ({ location }) => {
  const post = location.state.post;
  return (
    <Layout pageTitle="">
      <div>
        <h3>{post.title}</h3>
        <h6 style={createdStyle}>{post.created}</h6>
        <p style={detailStyle}>{post.details}</p>
      </div>
    </Layout>
  );
};

export default BlogDetail;
