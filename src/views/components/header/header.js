import React from "react";
import { Nav, Navbar } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">react-4-inova</Navbar.Brand>
        {this.props.isMobileSized ? (
          <Navbar.Text>
            Detected:<b> Mobile</b>
          </Navbar.Text>
        ) : (
          <Navbar.Text>
            Detected:<b> Web browser</b>
          </Navbar.Text>
        )}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" />
          <Nav>
            <Nav.Link href="#countries">Countries</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Header;
