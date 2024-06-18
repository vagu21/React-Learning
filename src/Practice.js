import React,{useEffect, useState} from 'react'

const Practice = () => {
    const [data,setData]=useState(0);
  useEffect(()=>{
    if(data==5){
        throw new Error("App Crashed");
    }
    
  },[data])
   
  return (
    <div>
{data}
<button onClick={()=>setData(data+1)}>Change</button>

    </div>
 


  )
}

export default Practice