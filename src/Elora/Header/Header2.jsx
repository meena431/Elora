import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import './Header.css'

function Header2 () {
  return (
    <Navbar bg="black" variant="dark" expand="lg" className="py-0 sticky-top" collapseOnSelect>
        <Container fluid className="d-flex align-items-center">
          <NavDropdown id="mobile-all" menuVariant="dark" className="text-white no-hover-bg glass-dropdown d-lg-none me-auto" title={<span className="d-inline-flex align-items-center fw-bold"><i className="bi bi-list me-2" />ALL&nbsp;DEPARTMENTS</span>}>
              <NavDropdown.Item as={NavLink} to="men">Men</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="women">Women</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="kids">Kids</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="accessories">Accessories</NavDropdown.Item>
          </NavDropdown>
          
          <Navbar.Toggle aria-controls="main-nav" className="fs-6 ms-auto navbar-toggler"/>

          <Navbar.Collapse id="main-nav">
            <Nav className="main-nav mx-auto align-items-lg-center text-white">
              <NavDropdown id="basic-nav-dropdown" menuVariant="dark" className="text-white no-hover-bg glass-dropdown pe-3 d-none d-lg-inline-block" title={<span className="d-inline-flex align-items-center text-white fw-bold me-2"><i className="bi bi-list me-2" />ALL&nbsp;DEPARTMENTS</span>}>
                <NavDropdown.Item as={NavLink} to="men">Men</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="women">Women</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="kids">Kids</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="accessories">Accessories</NavDropdown.Item>
              </NavDropdown>
              <NavLink to="/" className="nav-link text-white px-lg-5 fw-bold border-end border-secondary navbar-link">HOME</NavLink>
              <NavLink to="about" className="nav-link text-white px-lg-5 fw-bold border-end border-secondary navbar-link">ABOUT</NavLink>
              <NavLink to="shop" className="nav-link text-white px-lg-5 fw-bold border-end border-secondary navbar-link">SHOP</NavLink>
              <NavLink to="blog" className="nav-link text-white px-lg-5 fw-bold border-end border-secondary navbar-link">BLOG</NavLink>
              <NavLink to="contact" className="nav-link text-white px-lg-5 fw-bold border-end border-secondary navbar-link">CONTACT</NavLink>
              <NavLink to="pages" className="nav-link text-white px-lg-5 fw-bold border-end border-secondary navbar-link">PAGES</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Header2;