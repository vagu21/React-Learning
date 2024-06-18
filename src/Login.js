import React, { useState } from 'react'
import UseRefExamp from './UseRefExamp';

const Login = () => {
    const [data, setData] = useState({
        username: '',
        password: ''
    });

    const { username, password } = data;

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const submitHandler=e=>{
        e.preventDefault();
        console.log(data);
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder='username' name="username" value={username} onChange={changeHandler}/><br/><br/>
            <input type="password" placeholder='password' name="password" value={password} onChange={changeHandler}/><br/><br/>
            <input type="submit" name="submit"/>

        </form>
        <>
        <UseRefExamp/>

    </>
 
    </div>
  )  
}
function Users(){
    return(
        <div>
            <h1>This is Users in Login</h1>
        </div>
    )
}

function Admins(){
    return(
        <div>
            <h1>This is Admins in Login</h1>
        </div>
    )
 
    
}

export default Login