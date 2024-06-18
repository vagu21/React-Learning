import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Apifetch = () => {
    const [data,setData]=useState([])
    const [user,setUser]=useState([])
     useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then(
            response=>response.json()
        ).then(json=>setData(json))
     },[])
/**Using Axios Data Fetching */
     useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/todos').then(
  response=>setUser(response.data)
)
     },[])
  return (
    <div>
{data.map(item=><li key={item.id}>{item.name}</li>)}
{user.map(item=><li key={item.id}>{item.title}</li>)}
    </div>
  )
}

export default Apifetch