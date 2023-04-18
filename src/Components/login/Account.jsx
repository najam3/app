import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Form, Button,Container, Row, Col,  Tabs, Tab } from 'react-bootstrap';
import headerImg from '../Assests/Logo/image1.png';

const Account = () => {
const [key, setKey] = useState('login');


const variants = {
  enter: {
    x: 50,
   opacity:0
  },
  center: {
    x: 0,
    opacity: 1
  },
  exit: {
    x: -50,
   opacity: 0
  },
};

function handleChange(){

}

  return (
 
    <Container fluid>
      <Row style={{padding: '8em 0', background: 'radial-gradient(#fff, #ffd6d6)'}} 
      className='justify-content-center align-items-center gap-5'>
        <Col lg={6} sm={8}>
       <img src={headerImg} className="img-fluid" alt="" />
        </Col>
    
        <Col lg={3} sm={6}>
        <Tabs 
        activeKey={key}
        onSelect={(k) => setKey(k)}
        style={{backgroundColor: 'white', color: "black", border: 'none'}}
        >
           <Tab eventKey="login" 
           style={{fontWeight: 'bolder', color: 'red'}} 
           title="log-in">
           <AnimatePresence>
                {key === 'login' && (
                  <motion.div
                    key="login-tab"
                    initial="exit"
                    animate="center"
                    exit="enter"
                    variants={variants}
                    transition={{duration: 0.5}}
                  >
                <Form
                style={{backgroundColor: 'white'}}
                className='shadow px-3 py-5'>
               <Form.Group className='mb-4'>
        
        <Form.Control type='email' 
        onChange={handleChange} size='sm' value='' 
        placeholder='Enter Email'/>
        
      </Form.Group>

      <Form.Group className='mb-4'>
      
        <Form.Control type='password' 
         onChange={handleChange} size='sm' 
         value=''
         placeholder='Enter Password'/>
        
      
      </Form.Group>

        <Button 
        type='submit' 
        style={{backgroundColor: '#ff523b', border: 'none'}}
        className='px-5 d-block w-100'>Submit</Button>
                </Form> 
                  </motion.div>
                )}
              </AnimatePresence>
           </Tab>
           <Tab eventKey="signUp"  title="Sign-up">
           <AnimatePresence>
                {key === 'signUp' && (
                  <motion.div
                    key="signUp-tab"
                    initial="enter"
                    animate="center"
                    exit="enter"
                    variants={variants}
                    transition={{duration: 0.5}}
                  >
                 
        <Form style={{backgroundColor: 'white'}} className='px-3 shadow py-5'>
        <Form.Group className='mb-4'>
        
        <Form.Control type='email' 
        onChange={handleChange} size='sm' value='' 
        placeholder='Enter Email'/>
       
      </Form.Group>
        <Form.Group className='mb-4'>
       
        <Form.Control type='text' 
        onChange={handleChange} size='sm' value='' 
        placeholder='Enter Your Username'/>
      </Form.Group>

      <Form.Group className='mb-4'>
     
        <Form.Control type='password' 
        onChange={handleChange} size='sm' 
        value=''
         placeholder='Enter Password'/>

      
      </Form.Group>

        <Button 
        style={{backgroundColor: '#ff523b', border: 'none'}}
        type='submit' 
        className='px-5 d-block w-100'>Submit</Button>
                 </Form> 
                  </motion.div>
                )}
              </AnimatePresence>
           </Tab>
           
        </Tabs>
       </Col>
      </Row>
    </Container>

 
  )
}

export default Account