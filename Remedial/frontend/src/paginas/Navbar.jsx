import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <BootstrapNavbar className='navBg' expand='lg'>
        <Container>
          <BootstrapNavbar.Collapse id ='basic-navbar-nav'>
            <Nav className='menu'>
              <Nav.Link as={Link} to='/Home'>Home</Nav.Link>
              <Nav.Link as={Link} to='/grafica_estatica'>Grafica Estatica</Nav.Link>
              <Nav.Link as={Link} to='/grafica_dinamica'>Grafica Dinamica</Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </>
  )
}

export default NavBar;
