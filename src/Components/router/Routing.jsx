import React from 'react';
import {Route, Routes } from 'react-router-dom'; 
import About from '../About';
import Home from '../Home/Home';
import Products from '../products/Products';
import Account from '../login/Account';
import Checkout from '../Checkout/Checkout';


const Routing = () => {
  

  return (
    <>
    
        <Routes>
          <Route path='/login' element={<Account/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
         
        </Routes>
     
    </>
  );
}

export default Routing;
