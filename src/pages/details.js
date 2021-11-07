import * as React from 'react';
import Layout from '../components/layout';

const createdStyle = { fontSize: 12 };
const detailStyle = { marginTop: 40 };

const BlogDetail = ({ location }) => {
  return (
    <Layout pageTitle="">
      <div>
        <h3>{location.state.post.title}</h3>
        <h6 style={createdStyle}>{location.state.post.created}</h6>
        <p style={detailStyle}>{location.state.post.details}</p>
      </div>
    </Layout>
  );
};

export default BlogDetail;
