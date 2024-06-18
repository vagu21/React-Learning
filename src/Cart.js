import React, { createContext,useState } from 'react'
import Count from './Count'
import Display from './Display'

export const store=createContext();
const Cart = () => {
    const [data,setData]=useState(
        [
            {
              "brandname": "Apple"
            },
            {
              "brandname": "Samsung"
            },
            {
              "brandname": "Google"
            },
            {
              "brandname": "OnePlus"
            },
            {
              "brandname": "Xiaomi"
            },
            {
              "brandname": "Oppo"
            },
            {
              "brandname": "Vivo"
            },
            {
              "brandname": "Huawei"
            },
            {
              "brandname": "Sony"
            },
            {
              "brandname": "Nokia"
            }
          ]
          
    )
  return (
    <div>
        <h1>This is Cart Functionality using use Context Api</h1>
        <store.Provider value={[data,setData]}>
        <Count/>
        <Display/>
        </store.Provider>
      
    </div>
  )
}

export default Cart