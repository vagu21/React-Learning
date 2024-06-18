import React,{useState,useEffect,} from 'react'
import './Hooks.css'
const Hooks = () => {
    const [count,setCount]=useState(0)
    const [user,setUser]=useState("");
    const handler=e=>{
        setUser(e.target.value);
    }
    const [data,setData]=useState({
      username:'',
      password:''
    })
    const {username,password}=data;
    const onChange=e=>{
      setData({...data,[e.target.name]:[e.target.value]})
    }
    const submithandler=e=>{
      e.preventDefault();
      console.log(data)
    }
    useEffect(()=>console.log(count),[count])
    const arr=["React Js","Node Js","Express Js","Next Js"]
    const brr=[
      {
        id:1,
        title:"React Js"
      },
      {
        id:2,
        title:"Node Js"
      },
      {
        id:1,
        title:"Express Js"
      },
      {
        id:1,
        title:"Next Js"
      },
    ]

    const names=['Bharadwaj','Bhanu','Bopal','Chandu','Lohi'];
    const filtered=names.filter(item=>item.includes('B'));
  return (
    <div style={{textAlign: 'center'}} className="box" > 
        <h1>UseState Hook</h1>
        <h1 >{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <hr/>
        <h1>UseEffect Hook</h1>
        <p>if you want you execute a function after a return statement,it is used and </p>
        <p>It is a Lifecycle Hook</p>
        <p>It will have two parameters-function,dependency</p>


<br/>
<p>You clicked {count} times</p>
<button onClick={()=>setCount(count+1)}>Click Me</button>
<hr/>
 <h1>OnChange Event handler</h1>
 <p>Used For Properly handling user level data and assging it to a variable</p>
 <input type="text" placeholder="Username" value={user} name="user"  onChange={handler}/>
 <br></br>
 <h1>{user}</h1>

 <hr/>
 <h1>onSubmit Event Handler</h1>
 <p>used when we want to give user provided data to backend</p>
 <form onSubmit={submithandler}>
 <input type="text" name="username" value={username} placeholder="username" onChange={onChange}/><br/><br/>
<input type="password" name="password" value={password} placeholder="Password" onChange={onChange}/><br/><br/>
 <input type="submit" name="submit"/>
 </form>
 <hr/>
<h1>Map Function</h1>
<p>To Hydrate array of Object and print as individual object or print as Individual Object</p>

<h2>printing array using map</h2>
{
  arr.map(

    (value,index)=><li key={index}>{value}</li>
  )
}
<h2>printing array of objects using map</h2>
{
  brr.map(
    (value)=><li key={value.id}>{value.title}</li>
  )
}

<hr/>
<h1>Filter() Function</h1>
<p>to filter array of values(or)objects</p>
{
      filtered.map(item=><li>{item}</li>)
    }
    <hr/>

    <h1>Export Vs Export Default</h1>

 <p>Export == import {"{"}Component{"}"}</p>
 <p>Expoer Default==import component</p>
 <hr/>
   <h1>Axios() Library</h1>
   <p>To Make any of the HTTP Request like get,post,delete request</p>
   <hr/>

   <h1>Parameters</h1>
   <h5>Query parameters</h5>
   <p>starts with question mark,contains key-values</p>
<p>uselocation()</p>
   <h5>Path Parameters/Route Parameters</h5>
   <p>Can do Dyanmic Routing using this path parameters</p>
   <p>useparams()</p>
   <hr/>
<h1>Use Context Hook </h1>
<p>To directly send props to a particular component</p>
<hr/>

<h1>React Redux</h1>
<p>Redux is an open-source
JavaScript library for managing
application state.</p>
<h4>Pachages Requiredand needed to be installed</h4>
<h5>npm install:</h5>
<h5>redux-<p>to install redux</p></h5>
<h5>react-redux-{">"}<p>to use redux values  it in react</p></h5>
<h5>redux thunk-<p>
 to dispatch state value,function return,middleware </p></h5>
<h5>redx devtools extension-<p>
  to monitor state values in browser</p></h5>
<h2>Major terms</h2>
<h4>Store</h4>
<h5>To store state values</h5>
<p>using provide you can use those values in react component</p>
<h4>Reducer</h4>
<h5>Part of store,for managing the store values like to delete and update them</h5>
<h4>action</h4>
<h4>action{"->"}dispatcher{"->"}store</h4>
<h3>{"1)"}mapStateToProps</h3>
<p>to pass the data from store to component</p>
<h3>{"2)"}mapDispatchToProps</h3>
<p>used when you want to dispatch action creators as props to component </p>
<hr/>
<h1>Lifecycle component methids</h1>
<h3>componentDidMount{"()"}</h3>
<p>It is Executed for the very first time when the compnent is renderd and evaluated</p>
<p>Ex:to get Api calls</p>
<h3>componentDidUpdate{"()"}</h3>
<p>I f you want perfomm an action immediatly after the compnent is updated</p>
<h3>componentWillUnmount{"()"}</h3>
<p>If you want to perform any action after removing component from broswer i.e dom</p>
<p>Example:msgs like succefuuly updated</p>
<h3></h3>
<h1>UseRef{"()"}</h1>
<p>Used for taking a value from user and assgiging it to a variable</p>
<p>Used when:eventhough the state component is updated,if you dont want entrire component to be re-rendered</p>
<h1>Context API</h1>
<h4>used for sharing,manipulating data between multiple coomponent without props</h4>
<hr/>
<h1>UseMemo{"()"} hook</h1>
<h4>improve performance of entire Application</h4>
<h4>Will not run for every render and run for only first render and when its dependecy changes</h4>
    </div>
  
  )
}

export default Hooks