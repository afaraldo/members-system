import Container from 'react-bootstrap/Container';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function CustomNavBar() {
  const [_cookies, _setCookie, removeCookie] = useCookies(['userToken']);
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/users/logout', { withCredentials: true, credentials: 'include' })
        .then(response=>{
            console.log(response);
            removeCookie('user')
            navigate("login");
        })
        .catch(err=>{
            console.log(err);
        });
  }
  
  return (
    <>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">InvoicePro</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#" onClick={logout}>
                Cerrar Sesion
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default CustomNavBar;