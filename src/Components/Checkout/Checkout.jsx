import { useCallback, useContext, useState } from 'react';
import '../store/Store';
import { CheckingContext } from '../store/Store';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import '../Checkout/Checkout.css';

const Checkout = () => {
  const [cartItems] = useContext(CheckingContext);
  const [totalPrice, setTotalPrice] = useState(null);
 console.log(cartItems)
  const handleChange = useCallback((e, index) => {
    const itemsCount = e.target.value;
    const newPrice = cartItems[index].price * itemsCount;
    cartItems[index]['newPrice'] = newPrice;
    setTotalPrice([...cartItems]);  
 }, [cartItems, setTotalPrice]);


  return (
    <main>
      {
        cartItems.length === 0 ? <h3 className='text-center'>No Items Carted</h3> :     <div className='cart-page'>
         
        <Container>
       <Row>
      <Col  className='d-flex  flex-column border-top  border-bottom py-5 gap-4' lg={6}>
         {cartItems.map((item, index) => (
           <div className='d-flex gap-3 my-3' key={index}>
             <hr />
    
            <div className='mx-3'>
           <img className='w-100 img-fluid' 
           alt={item.title} 
           src={item.image}/>
             </div>
            <div className='d-flex flex-column gap-3'>
           <span className='fw-bolder'>{item.title}</span>
           <span>{item.description}</span>
          </div>
          <div className='d-flex align-items-center flex-column gap-4'> 
            <span className='fw-bolder'>Each</span>
            <span className='fw-bold'>${item.price}</span>
          </div>
          <div className='d-flex align-items-center flex-column gap-4'>
            <span className='fw-bolder'>Quantity</span>
             <select key={index} onChange={e => handleChange(e, index)} className='pe-5'>
              <option>1</option>
              <option>2</option>
             </select>
          </div>
          <div className='d-flex align-items-center flex-column gap-4'>
            <span className='fw-bold'>Total</span>
            <span className='fw-bold'>${!totalPrice ? item.price : totalPrice[index].newPrice }</span>
          </div>
                  </div>
          
          ))}
          </Col>
       <Col className='my-auto ms-auto' lg={4}>
         <div className='d-flex flex-column gap-3'>
           <Form>
            <Form.Label>
              Enter Promo Code
            <Form.Control type='text' size='md' className='px-4'/>
            </Form.Label>
            <Button size='md' className='border-0 px-5 ms-4' 
            style={{backgroundColor:'black'}}>SUBMIT</Button>
          </Form>
          <span className='d-flex justify-content-between align-items-center'>
            <p>Shipping cost</p>
            <p>TBD</p>
          </span>
          <span  className='d-flex justify-content-between align-items-center'>
          <p>Discount</p>
            <p>-$0</p>
          </span>
          <span  className='d-flex justify-content-between align-items-center'>
          <p>Tax</p>
            <p>TBD</p>
          </span>
          <span  className='d-flex justify-content-between align-items-center'>
          <h3>Estimated Total</h3>
            <p>TBD</p>
          </span>
          <Button style={{backgroundColor: 'orangered'}} className='px-5 d-block mx-auto' size='md'>Checkout</Button>
         </div>
       </Col>
    </Row>
        </Container>
        </div>
      }

  
    </main>
  )
};

export default Checkout;