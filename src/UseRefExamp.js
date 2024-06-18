import React, { useEffect, useRef } from 'react'

const UseRefExamp = () => {
    const data=useRef(null);
    const submitHandler=e=>{
        e.preventDefault();
        console.log(data.current.value);
        
        data.current.value="hello";
    }
    useEffect(()=>{
data.current.focus();
    },[])
  return (
    <div>
        <h1>
        UseRefExample
        </h1>
        <form onSubmit={submitHandler}>
            <input ref={data} type="text"  placeholder='Enter name'/>
            <input type="submit"/>
        </form>

    </div>
  )
}

export default UseRefExamp