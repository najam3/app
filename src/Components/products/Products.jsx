
import React, {useState, useEffect} from "react";
import {Container, Row, Col, Form, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CheckingContext } from "../store/Store";
import  "../store/Store";




const Products = () => {
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [cartItems, setCartItems] = useContext(CheckingContext);
  const [cartIndex, setCartIndex] = useState(-1);
  const endPoint = 'https://fakestoreapi.com/products';

    console.log(cartIndex)

  useEffect(() => {
    fetch(endPoint)
      .then((data) => data.json())
      .then((response) => {
       setData(response)
      });
  }, []);

 const storedData = [...data].sort((a, b) => {
    if(sortOrder === 'asc') {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
 })

 function handleCart(i){
  const newItem = storedData[i];
  setCartIndex(i)
  setCartIndex(i);
  setCartItems(prev => {
    return [...prev, newItem]
  });

 }



  return (
    <div className="foo">
    <Container>
       <Row>
         <Col lg={10} className="d-flex justify-content-between mx-auto">
           <h2 className="text-danger fw-bolder">All Products</h2>            
          <Form>
            <Form.Select size="sm" onChange={(e) => setSortOrder(e.target.value)}>
               <option value='asc'>In Ascending Order</option>
               <option value='desc'>Sort In Descending Order</option>
            </Form.Select>
          </Form>
         </Col>
         
    
  <Col lg={12} className='d-flex pt-5 mt-5 gap-5 flex-wrap justify-content-center mx-auto align-items-center'>
          {
          storedData.map((shirt, i) => {
           const titleWords = shirt.title.split(' ');
           const truncatedTitle = titleWords.slice(0, 3).join(' ');
          return (
          <Card key={i} className='border-0 shadow' style={{width: 300}}>
           <Card.Body>
           <Card.Img width="100%" height={300} src={shirt.image} alt='' />
           <Card.Subtitle className='py-2'>{truncatedTitle}</Card.Subtitle>
            <Card.Footer>
           <Card.Text><FontAwesomeIcon icon={faStar} color='orange'/>{shirt.rating.rate}/5</Card.Text>
           <Card.Text>${shirt.price} 

           <FontAwesomeIcon className="ms-3" title="Add to Cart" 
           style={{cursor: 'pointer'}} 
           onClick={() => handleCart(i)} 
           icon={faCartShopping} color="orange"/></Card.Text>
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
  )
            }
export default Products;