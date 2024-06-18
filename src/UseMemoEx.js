import React,{useMemo, useState} from 'react'

export const UseMemoEx = () => {
    const [counter,SetCounter]=useState(0);
    const[number,SetNumber]=useState(5);
    const Factorial=useMemo(()=>{fact(number)},[number])
  return (
    <div>
        <center>
            {Factorial}
        Count:{counter}<br/>
        <button onClick={()=>SetCounter(counter+1)}>Change Counter</button>
        <button onClick={()=>SetNumber(number+1)}>Change Number</button>
        </center>

    </div>
  )
}

const fact=(n)=>{
    let ans=1;
    for(let i=n;i>=1;i--){
        ans=ans*i;
    }
    console.log("Fact is called");
    return ans;
}
