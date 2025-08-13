import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function CustomNavBar() {
  return (
    <>
      <BootstrapNavbar className="navBag" expand="lg">
        <Container>
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="menu">
              <Nav.Link as={Link} to="/Home">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/grafica_Estadica">Grafica</Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </>
  )
}
export default CustomNavBar;
