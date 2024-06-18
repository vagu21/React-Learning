import { exp } from 'mathjs'
import React from 'react'
import { Outlet ,Link} from 'react-router-dom'

function Users() {
  return (
    <div>
        <button><Link to="orders">Orders</Link></button>
        <button><Link to="profile">Profiles</Link></button>

        <h1>This is Users Component</h1>

        <Outlet/>
    </div>
  )
}

export function Orders(){
    return(
        <div>
            <h1>This is Orders Component</h1>
        </div>
    )
}
 export function Profile(){
    return(
        <div>
            <h1>This is Profiles Component</h1>
        </div>
    )
}
export default Users
