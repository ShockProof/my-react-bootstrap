import React from 'react';

import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

function SiteHeader({ title }) {

  const titleComponent = <span className="text-primary my-auto">Dropdown</span>;

  return (
    <Navbar bg="light" expand="lg" className="siteHeader">

      <Navbar.Brand href="#home" className="text-primary">{title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home" className="text-primary">Home</Nav.Link>
          <Nav.Link href="#link" className="text-primary">Link</Nav.Link>
          <NavDropdown title={titleComponent} id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1" className="text-primary">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2" className="text-primary">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" className="text-primary">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4" className="text-primary">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline className="has-search">
          <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default SiteHeader;
