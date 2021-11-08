import * as React from 'react';
import { container, heading, content } from './layout.module.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'gatsby';

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Ibrahim's Blog</Navbar.Brand>
          <Nav className="me-auto">
            <Link style={{ color: 'white', marginTop: 0, fontSize: 30, marginLeft: 10, marginRight: 10 }} to="/">
              Home
            </Link>
            <Link style={{ color: 'white', marginTop: 0, fontSize: 30, marginLeft: 10, marginRight: 10 }} to="/blog">
              Blog
            </Link>
            <Link style={{ color: 'white', marginTop: 0, fontSize: 30, marginLeft: 10, marginRight: 10 }} to="/about">
              About
            </Link>
            <Link style={{ color: 'white', marginTop: 0, fontSize: 30, marginLeft: 700 }} to="/post">
              Post
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <main>
        <div className={content}>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
