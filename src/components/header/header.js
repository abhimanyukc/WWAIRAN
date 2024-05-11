import {Container, Nav, Navbar} from "react-bootstrap"
import { Link } from "react-router-dom";
import  "./header.css";
const Header = () => {
    return (
        <>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/">My App</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/user" className="nav-link">Post User</Nav.Link>
            <Nav.Link as={Link} to="user/:id" className="nav-link">Update User</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}

export default Header;