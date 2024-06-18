import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Login from './Login'
import Signup from './Signup'
import Hooks from './Hooks'
import Pagenotfound from './Pagenotfound'
import Users, { Orders, Profile } from './Users'
import People from './People'
import Task from './Task'
import IndividualTask from './IndividualTask'
import Contact from './Contact'
import Search from './Search'
import ClassBased from './ClassBased'
import UseContextEx from './UseContextEx'

const headerStyles = {
    navbar: {
        backgroundColor: '#333',
        overflow: 'hidden'
    },
    navbarList: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'space-around'
    },
    navbarItem: {
        display: 'inline'
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        padding: '14px 20px',
        display: 'block'
    },
    linkHover: {
        backgroundColor: '#575757'
    }
}

function Header() {
    return (
        <nav style={headerStyles.navbar}>
            <ul style={headerStyles.navbarList}>
                <li style={headerStyles.navbarItem}><Link to="/" style={headerStyles.link}>Home</Link></li>
                <li style={headerStyles.navbarItem}><Link to="/about" style={headerStyles.link}>About</Link></li>
                <li style={headerStyles.navbarItem}><Link to="/login" style={headerStyles.link}>Login</Link></li>
                <li style={headerStyles.navbarItem}><Link to="/signup" style={headerStyles.link}>Register</Link></li>
                <li style={headerStyles.navbarItem}><Link to="/hooks" style={headerStyles.link}>Hooks</Link></li>
                <li style={headerStyles.navbarItem}><Link to="/users" style={headerStyles.link}>Users</Link></li>
                <li style={headerStyles.navbarItem}><Link to="/contact" style={headerStyles.link}>Contact</Link></li>
                <li style={headerStyles.navbarItem}><Link to="/task" style={headerStyles.link}>Task</Link></li>
                <li style={headerStyles.navbarItem}><Link to="/search" style={headerStyles.link}>Search</Link></li>

                <li style={headerStyles.navbarItem}><Link to="people/10/sat" style={headerStyles.link}>People 10</Link></li>
                <li style={headerStyles.navbarItem}><Link to="people/20/loh?posts=100&category=jjds" style={headerStyles.link}>People 20</Link></li>
            </ul>
        </nav>
    )
}

const Main = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/hooks" element={<Hooks />} />
                    <Route path="users" element={<Users />}>
                        <Route path="orders" element={<Orders />} />
                        <Route path="profile" element={<Profile />} />
                    </Route>
                    <Route path="people/:id/:name" element={<People />} />
                    
                    <Route path="/task" element={<Task/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/search" element={<Search/>}/>
                    <Route path="/class" element={<ClassBased/>}/>
                    <Route path="/task/:id" element={<IndividualTask/>}/>
                    {/* <Route path="useconexp" element={<UseContextEx/>}/> */}
                    <Route path="*" element={<Pagenotfound />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Main