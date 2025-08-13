import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function CustomNavbar() {
    return (
        <>
        <BootstrapNavbar className="navBg" expand="lg">
            <Container>
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="menu">
                        <Nav.Link as={Link} to="/Home">Estatica</Nav.Link>
                        <Nav.Link as={Link} to="/Ejemplo">Dinamica</Nav.Link>
                    </Nav>    
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
        </>
    )
}

export default CustomNavbar;
