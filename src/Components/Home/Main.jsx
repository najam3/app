import React, { useEffect, useState } from 'react';
import {Container, Row, Col, Image, Card,Button } from 'react-bootstrap';
import category1 from '../Assests/Logo/random/category-1.jpg';
import category2 from '../Assests/Logo/random/category-2.jpg';
import category3 from '../Assests/Logo/random/category-3.jpg';
import product from '../Assests/Logo/random/exclusive.png';
import {faQuoteLeft, faStar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import testimonials from '../testimonials.json';
import {motion} from 'framer-motion';

const Main = () => {
  const [products, setProducts] = useState([]);
  const [currentValue, setCurrentValue] = useState(0);
  const endPoint= 'https://fakestoreapi.com/products';
  const color = '#ff523b';
  const stars = Array(5).fill(0)
 
  function handleClick(value) {
   setCurrentValue(value)
  }



  const shirts = products.filter(product => (
    product.category.includes("men's clothing") && product.id
));
  
  
  useEffect(() => {
     fetch(endPoint).then(respone => respone.json().then(data => {
        data.map(product => (
          setProducts(prevProducts=> {
            return [...prevProducts, product]
          })           
        ))
     }))
  }, [])


  return (
     <main>
        <div style={{padding: '6em 0'}} className='unkown'>
        <Container fluid>
            <Row>
                <Col lg={3} className='d-flex mx-auto justify-content-center align-items-center mx-auto gap-5'>
                   <Image className='img-fluid' src={category1} alt=''/>
                   <Image src={category2} className='img-fluid' alt=''/>
                   <Image src={category3} className='img-fluid' alt=''/>
                </Col>
            </Row>
        </Container>
        </div>
        <div style={{padding: '6em 0'}} className='featured_products'>
        <Container fluid>



                 <h2 className='my-5 pb-3 mx-auto w-25'>Featured Products</h2>
            <Row>
                <Col lg={9} className='d-flex gap-5 justify-content-center mx-auto align-items-center'>
                {
              shirts.slice(0, 4).map(shirt => {
                 const titleWords = shirt.title.split(' ');
                 const truncatedTitle = titleWords.slice(0, 3).join(' ');
                return (
                <Card key={shirt.id} className='border-0 shadow' style={{width: 500}}>
                <Card.Body>
                 <Card.Img width={500} src={shirt.image} alt='' />
                 <Card.Subtitle className='py-2'>{truncatedTitle}</Card.Subtitle>
                  <Card.Footer>
                 
                 <Card.Text>${shirt.price}</Card.Text>

                  </Card.Footer>
                      </Card.Body>
                        </Card>
    );
  })
}         
           </Col>
          
          
           <Col lg={9} className='d-flex pt-5 gap-5 justify-content-center mx-auto align-items-center'>
                {
              products.slice(4, 8).map(shirt => {
                 const titleWords = shirt.title.split(' ');
                 const truncatedTitle = titleWords.slice(0, 3).join(' ');
                return (
                <Card className='border-0 shadow' style={{width: 500}}>
                <Card.Body>
                 <Card.Img width={500}  src={shirt.image} alt='' />
                 <Card.Subtitle className='py-2'>{truncatedTitle}</Card.Subtitle>
                  <Card.Footer>
                 <Card.Text><FontAwesomeIcon icon={faStar} color='orange'/>{shirt.rating.rate}/5</Card.Text>
                 <Card.Text>${shirt.price}</Card.Text>
                  </Card.Footer>
                      </Card.Body>
                        </Card>
    );
  })
}         
           </Col>
            </Row>
        </Container>
        
        </div>
        <div style={{background: 'radial-gradient(#fff, #ffd6d6)'}} className="py-5 smart__phone">
          <Container fluid>
            <Row className='align-items-center justify-content-center'>
              <Col lg={4}>
                <Image src={product} alt='' className='img-fluid'/>
              </Col>
              <Col lg={4}>
                  <p className='text-start'>Exclusively available on RedStore</p>
                  <h1 className='fw-bolder text-start'>Smart Band 4</h1>
                  <p className='text-start'>The Mi smart band 4 feature a 39.9% larger (than Mi band 3) AMOLED color full touched display with adjustible brightness.
                     so everything is clear as can</p>
                    <Button size='lg' 
                     style={{backgroundColor: '#ff523b', border: 'none'}}
                    className='px-5 text-start d-block me-auto'>Buy Now</Button>
              </Col>
            </Row>
          </Container>
        </div>
        <div style={{padding: '7em 0'}}  className="testimonials">
          <Container>
            <Row>
              <Col lg={9} className='d-flex mx-auto gap-5'>
                {
                  testimonials.map(testimonial => (
                    <motion.div whileHover={{y: -50, cursor: 'pointer', transition:{duration: 0.5}}}>
                 <Card className='shadow border-0 py-3'>
                  <Card.Body>
                  <FontAwesomeIcon icon={faQuoteLeft} color= '#ff523b' size='2x'/>
                   <Card.Text>{testimonial.comment}</Card.Text>
                    <Card.Text className='d-flex justify-content-center'> 
                  {
                    stars.map((_, index) => {
                      return(
                     <FontAwesomeIcon icon={faStar}
                     onClick={() => handleClick(index + 1)}
                     color= {currentValue > index ? color : 'gray'}/>
                      )
                    })
                  }
                
                   </Card.Text>
                   <Card.Img style={{borderRadius: '50%'}} className='circle w-25' src={testimonial.Image}/>
                   <Card.Title className='mt-3'>{testimonial.name}</Card.Title>
                  </Card.Body>
                 </Card>
                     </motion.div>

                  ))
                }
              </Col>
               <Row>
                  
               </Row>
            </Row>
          </Container>
        </div>
     </main>
  )
}

export default Main;