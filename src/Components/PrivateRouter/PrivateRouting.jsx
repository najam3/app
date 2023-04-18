import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
const PrivateRouting = () => {
    const isLogin = false;
  return (
    <>
    {
     isLogin ? <Outlet /> : <Navigate to={'/login'}/>
    }
    </>
  )
}

export default PrivateRouting