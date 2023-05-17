import './navbar.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Logo from '../../assets/crawless-logo.png';


function NavbarExample() {
  return (
    <Navbar expand="lg" id='navbar'>
          <div className='container'>
            <Navbar.Brand href="#home"><img src={Logo}></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="#product" className='mx-4 text-white'>Product</Nav.Link>
                <NavDropdown title="Products" id="basic-nav-dropdown" className='mx-4'>
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Resources" id="basic-nav-dropdown" className='mx-4'>
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#store" className='mx-4 text-white' >Store</Nav.Link>
              </Nav>
                <Button size="lg" id='navBtn'>
                  Try for free
                </Button>{' '}
            </Navbar.Collapse>
          </div>
        </Navbar>
  );
}

export default NavbarExample;