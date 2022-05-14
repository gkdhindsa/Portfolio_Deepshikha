import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
function NavbarTop() {
    return ( 
        <div>
        <Navbar collapseOnSelect expand="lg"  >
        <Navbar.Brand href="/" >
            <span>
               Pegu Deepshikha
            </span>
            <span className='brand-inner'>
                is a narrator of stories
            </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
            <Nav.Link href="about" className='navLink' >ABOUT</Nav.Link>
            <Nav.Link href="culture">CULTURE</Nav.Link>
            <Nav.Link href="experience">EXPERIENCE DESIGN</Nav.Link>
            <Nav.Link href="thought">THOUGHT EXPERIMENTS</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </div>
     );
}

export default NavbarTop;