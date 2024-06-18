import React, { useContext } from 'react'
import { store } from './UseContextEx';
function Product() {

  const [data,setData]=useContext(store);
  return (
    <div><h1>Component B</h1>
        <h2>{data}</h2>
        </div>
  )
}

export default Product