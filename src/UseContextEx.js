import React, { createContext, useState } from 'react'
import ProductList from './ProductList';
import Product from './Product';


export const store=createContext();

const UseContextEx = () => {
    const [data,SetData]=useState(0);
  return (
    <div>
<store.Provider value={[data,SetData]}>
<ProductList/>
<Product/>
<button onClick={()=>SetData(data+1)}>Change</button>
</store.Provider>

    </div>
  )
}

export default UseContextEx