import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Button,Image } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const {users,logOut} = useAuth();
    return (
        <>
        <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
          <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          {/* <Navbar.Brand href="#home">
              <img
                alt=""
                // src={logo}
                width="70"
                height="70"
                className="d-inline-block align-center"
              />
            Travel Goru
            </Navbar.Brand> */}
            <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
           {!users?.photoURL ?  <Navbar.Text className="text-white">     
              Signed in as: {users?.displayName}
            </Navbar.Text>:
              <Nav.Link> <Image style={{width: '40px',marginRight:'15px'}} src={users?.photoURL} roundedCircle />{users?.displayName}</Nav.Link>}
              <Nav.Link as={NavLink} style={{color: 'white'}} to="/home">Home</Nav.Link>
              <Nav.Link as={NavLink} style={{color: 'white'}} to="/explore">Explore</Nav.Link>
              {
                users?.email && <Nav.Link as={NavLink} style={{color: 'white'}} to="/my-orders">MyOrders</Nav.Link>
              }
              {
                users?.email && <Nav.Link as={NavLink} style={{color: 'white'}} to="/add_products">Add Products</Nav.Link>
              }
              {!users?.email && <Nav.Link as={NavLink} style={{color: 'white'}} to="/login">Login</Nav.Link>}
              {!users?.email && <Nav.Link as={NavLink} style={{color: 'white'}} to="/register">Register</Nav.Link>}
              {users?.email && <Button onClick={logOut}  variant="secondary" size="sm">Logout</Button>}
              {/* <Button onClick={logOut} variant="secondary" size="sm">logout</Button> */}
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default Header;