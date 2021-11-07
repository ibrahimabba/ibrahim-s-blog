import React, { useState } from 'react';
import Layout from '../components/layout';
import { Form, Button, Spinner } from 'react-bootstrap';
import { spinner } from './page-styles/post.module.css';
import MyVerticallyCenteredModal from '../components/MyVerticallyCenteredModal';

const PostPage = () => {
  const [loading, setLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const handleSubmit = async () => {
    const now = new Date().toString().split(' ');

    const title = document.getElementById('title').value;
    const description = document.getElementById('textArea').value;

    if (!title || !description) {
      setModalShow(true);
      return;
    }

    setLoading(true);
    await fetch('https://personal-blog-978b9-default-rtdb.firebaseio.com/posts.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: title, details: description, created: now.slice(0, 5).join(' ') }),
    });
    setLoading(false);
  };
  return (
    <Layout pageTitle="Create a new blog">
      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
      {loading ? (
        <div className={spinner}>
          <Spinner animation="grow" size="sm" />
          <Spinner animation="grow" />
        </div>
      ) : (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Blog Title</Form.Label>
            <Form.Control id="title" type="text" placeholder="Title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Details</Form.Label>
            <Form.Control id="textArea" as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      )}
    </Layout>
  );
};

export default PostPage;
