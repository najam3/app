import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './CSS/WebNavigation.css';
import logo from './Assests/Logo/logo.png'
import { FaCartPlus } from 'react-icons/fa'


const WebNavigation = () => {
 


  let UI = <FaCartPlus className='me-2' color='red'/>
 
 
  return (
  <Navbar 
  fixed="top"
  
   expand='lg' 
   className="px-lg-5 py-lg-3 justify-content-between"
   style={{background: "#fff"}}
   >
         <Container>
         <Navbar.Brand style={{color: 'black', fontWeight: '700', fontSize: '26px'}} href="#home">
             <img src={logo} style={{width: '125px'}} alt="#" />
         </Navbar.Brand>
         <Navbar.Toggle style={{borderColor: 'black'}} aria-controls="basic-navbar-nav" />
      
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto  ms-3 gap-5 gap-lg-5  gap-sm-3">
        <Nav.Item>
         <NavLink className='py-2' to={"/"}>Home</NavLink>
        </Nav.Item>
        <Nav.Item>
         <NavLink className='py-2' to={"/products"}>Products</NavLink>
        </Nav.Item>
           <Nav.Item>
            <NavLink className='py-2' to={"/login"}>Account</NavLink>
            </Nav.Item>
           <Nav.Item>
            <NavLink className='py-2' to={"/checkout"}>{UI}</NavLink>
            </Nav.Item>
           </Nav>

        </Navbar.Collapse>
         </Container>
  </Navbar>
  )
};

export default WebNavigation;