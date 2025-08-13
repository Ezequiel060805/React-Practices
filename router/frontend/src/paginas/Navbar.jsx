import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function CustomNavbar() {
    return (
        <>
        <BootstrapNavbar className="navBg" expand="lg">
            <Container>
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="menu">
                        <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/Ejemplo">Ejemplo</Nav.Link>
                    </Nav>    
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
        </>
    )
}

export default CustomNavbar;