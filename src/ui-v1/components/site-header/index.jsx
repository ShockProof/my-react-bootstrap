import React from 'react';

import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

import Logout from '@ui-v1-components/logout-button';

function SiteHeader({ title }) {

  const dropdownTitleComponent = (
    <span className="text-primary my-auto">
      <strong> Dropdown</strong>
    </span>
  );

  return (
    <Navbar bg="light" expand="lg" className="siteHeader">
      <Navbar.Brand className="text-primary"><strong>{title}</strong></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="text-primary"><strong>Home</strong></Nav.Link>
          <Nav.Link className="text-primary"><strong>Link</strong></Nav.Link>
          <NavDropdown title={dropdownTitleComponent} id="basic-nav-dropdown">
            <NavDropdown.Item className="text-primary">Action</NavDropdown.Item>
            <NavDropdown.Item className="text-primary">Another action</NavDropdown.Item>
            <NavDropdown.Item className="text-primary">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="text-primary">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline className="has-search">
          <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
          <Logout />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default SiteHeader;
