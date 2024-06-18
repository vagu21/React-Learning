import React, { useReducer } from 'react'

function counterReducer(state,action){
    switch(action.type){
       case "INC": return state+1
       case "DEC":   return state-1;
    case "RESET":return 0;
      default: return state;
    

}
}

const UseReducerEx = () => {
    const [counter,dispatch]=useReducer(counterReducer,0)
  return (
    <div>
        <center>
        <h1>UseReducer Example</h1> 

<div className='mt-4 d-flex'>
    <button onClick={()=>{dispatch({type:"DEC"})}} className='btn btn-primary'>-</button>
    <div>counter:{counter}</div>
    <button onClick={()=>{dispatch({type:"INC"})}} className=' me-4 btn btn-primary'>+</button>
    <button onClick={()=>{dispatch({type:"RESET"})}} className='mr-4 btn btn-danger'>Reset</button>

</div>
        </center>
       
    </div>
  )
}

export default UseReducerEx