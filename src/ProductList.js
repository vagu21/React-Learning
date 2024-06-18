import React ,{useContext} from 'react'
import Product from './Product'
import { store } from './UseContextEx';


function ProductList() {
  const [data,setData]=useContext(store);


  return (
    <div><h1>Component A</h1>
      <h2>{data}</h2>
    </div>
   
  )
}

export default ProductList