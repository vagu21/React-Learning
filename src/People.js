import React from 'react'
import { useLocation, useParams } from 'react-router-dom'



function People() {
  const {id,name}=useParams();

  let q1=useLocation();
  let q2=new URLSearchParams(q1.search)
let cat=q2.get('category');
let pos=q2.get('posts');
  


return(
    <>
<h1>user id:{id}</h1>
<h1>user name:{name}</h1>
<h1>Category:{cat}</h1>
<h1>Posts:{pos}</h1>

    </>
    

)
}

export default People