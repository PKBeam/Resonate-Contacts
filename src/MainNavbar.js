import { Navbar, Container, Nav, NavDropdown, Card, Button } from 'react-bootstrap';

function MainNavbar() {
  return (
    <Navbar style={{height: "60px"}} bg="dark" variant="dark" sticky="top" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo512.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            style={{marginRight: "3px"}}
          />{' '}
        {"Resonate Contacts"}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;

