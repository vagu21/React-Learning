import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Signup = () => {
    const [data,setData]=useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    });
    useEffect(()=>{
        axios.get('https://reactform-e0892-default-rtdb.firebaseio.com/register.json').then(
            response=>console.log(response.data)
        )
    },[])
    const {username,email,password,confirmPassword}=data;
   const changeHandler=e=>{
    setData({...data,[e.target.name]:e.target.value})
   }

   const submitHandler=e=>{
    e.preventDefault();
    if(username.length<5){
        alert("username must be atleast 5 characters")
    }
    else if(password!=confirmPassword){
        console.log("password and confirm password should match");

    }else{
        axios.post('https://reactform-e0892-default-rtdb.firebaseio.com/register.json',data).then(()=>alert("Submitted Succssfully"))
    }
    
   }
  return (
    <div>
        <form onSubmit={submitHandler}>
    <input type="text" name="username" value={username} placeholder="username" onChange={changeHandler}/><br></br>
    <input type="email" name="email" value={email} placeholder="email" onChange={changeHandler}/><br></br>
   <input type="password" name="password" value={password} placeholder="password" onChange={changeHandler}/><br></br>
   <input type="password" name="confirmPassword" value={confirmPassword} placeholder="Confirm Password" onChange={changeHandler}/><br></br>
   {password!=confirmPassword?<p style={{color:'red'}}>password and confirm password is not matching</p>:null}
   <input type="submit" name="submit"/>


        </form>
    </div>
  )
}

export default Signup