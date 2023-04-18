import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import  appStore from '../Assests/Logo/random/app-store.png'
import  playStore from '../Assests/Logo/random/play-store.png'
import logo from '../Assests/Logo/random/logo.png';
const Footer = () => {
  return (
    <footer style={{backgroundColor: 'black', padding: '0 5em', marginTop: '10.4em'}} className='py-5'>
        <Container fluid>
         <Row className='gap-5'>
            <Col>
              <h4 className='fw-bolder text-white text-start'>Download our App</h4>
              <p className='text-light fw-light text-start'>Download App for Android and ios mobile phones</p>
               <div className='d-flex gap-2'>
                <img src={appStore} alt="" className='img-fluid w-50'/>
                <img src={playStore} alt="" className='img-fluid w-50'/>
               </div>

            </Col>
            <Col>
             <img src={logo} alt="" className='img-fluid w-75'/>
             <p className='text-light py-4 fw-light text-center'>Our purpose is to Sustainably Make the Pleasure and benefits of Sports Accessible to the many</p>

            </Col>
            <Col>
            <h4 className='fw-bolder text-white text-center'>Useful Links</h4>
             <ul className='d-flex flex-column p-0 align-items-center'>
                <li className='list-style-type-none'>
                    <a className='text-decoration-none text-light' href="#coupons">Coupons</a>
                </li>
                 
                <li>   <a className='text-decoration-none text-light' href="#coupons">Blog Post</a></li>
                <li> <a className='text-decoration-none text-light' href="#coupons">Return Policy</a></li>
                <li><a className='text-decoration-none text-light' href="#coupons">Join Affiliate</a></li>
             </ul>
            </Col>
            <Col>
            <h4 className='fw-bolder text-white text-center'>Follow us</h4>
             <ul className='d-flex flex-column p-0 align-items-center'>
                <li className='list-style-type-none'>
                    <a className='text-decoration-none text-light' href="#coupons">Facebook</a>
                </li>
                 
                <li>   <a className='text-decoration-none text-light' href="#coupons">Twitter</a></li>
                <li> <a className='text-decoration-none text-light' href="#coupons">Instagram</a></li>
                <li><a className='text-decoration-none text-light' href="#coupons">Youtube</a></li>
             </ul>
            </Col>
            <Row>
                <Col className='text-white '>
                 <hr style={{height: '5px', backgroundColor: '#fff'}}/>
                  <p>Copyright &copy; 2023 - Najam Ul Haq</p>
                </Col>
            </Row>
         </Row>
        </Container>
    </footer>
  )
}

export default Footer