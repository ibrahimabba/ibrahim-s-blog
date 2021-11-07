import * as React from 'react';
import { container, heading, navlinkitem, content } from './layout.module.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Ibrahim's Blog</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link className={navlinkitem} href="/post">
              Post
            </Nav.Link>
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
