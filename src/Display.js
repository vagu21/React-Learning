import React ,{useContext, useState}from 'react'
import {store} from './Cart.js'
const Display = () => {
    const [data,setData]=useContext(store);
    const [name,setName]=useState('');

    const changeHandler=e=>{
        setName(e.target.value);
    }
    const submitHandler=e=>{
        e.preventDefault();
        setData([...data,{brandname:name}])
    }

  return (
    <div className='card'>
        <div className='card-body'>
            {
                data.map(item=><h3 className='card-title'>{item.brandname}</h3>)
            }
       <form className='form' onSubmit={submitHandler}>
<input type="text" onChange={changeHandler} placeholder='Enter brand'/>
<input type="submit" value="Add"/>
       </form>

        </div>
    </div>
  )
}

export default Display