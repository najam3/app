import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import bgImg from '../Assests/Logo/image1.png';
import Main from './Main';
const Home = () => {
  return (
    <>
    <header  
    style={{background: 'radial-gradient(#fff, #ffd6d6)'}}>
    <Container>     
     <Row style={{padding: "9.3em 0"}}>
      <Col lg={6} style={{marginTop: '7em'}} className="me-auto">
        <h1
        style={{fontSize: "54px"}}
         className='text-start fw-bolder'>
       Give Your Workout
         A New Style!</h1>
         <p className='text-start fs-5'>Success is not always about greatness. Its about consistency. Consistent
          hardwork gain success. Greatness will come</p>
          <Button style={{backgroundColor: '#ff523b'}}
           className='d-block me-auto border-0 px-5' size='md'>
            Explore Now <FontAwesomeIcon icon={faArrowRightLong}/></Button>
      </Col>
      <Col lg={5}>
        <img src={bgImg} alt="" className='img-fluid' />
      </Col>
     </Row>

    </Container>
    </header> 
    <Main/>  
    </>
  )
}

export default Home