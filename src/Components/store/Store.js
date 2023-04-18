import React,{ createContext, useState } from "react";


const initialState = [];


export const CheckingContext = createContext();

const Store = ({ children }) => {
   const [cartItems, setCartItems] = useState(initialState);
    console.log(cartItems);
    return(
        <>
        <CheckingContext.Provider value={[cartItems, setCartItems]}>
                   {children}
        </CheckingContext.Provider>
        </>
    )
}

export default Store;