import React, { useState } from 'react'
import Data from './city.json'
const Search = () => {
   
    const [data,setData]=useState('');
    const handlerEvent=e=>{
        setData(e.target.value)
    }
  return (
    <div>
        <center>
        <h1>Enter city:</h1>
        <input type="text" value={data} onChange={handlerEvent}/>
        {
            Data.filter(city=>city.name.toLowerCase().includes(data.toLowerCase())).map(item=>{
                return <div style={{border:'1px solid black',margin:'10px',padding:'10px',maxWidth:'70%'}}>
                    {item.name}
                </div>
            })
        }
        </center>
       
    </div>
  )
}

export default Search