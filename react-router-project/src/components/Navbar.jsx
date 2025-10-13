import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <ul>
                {/* <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li> */}

                {/* 
              - Link is used for simple navigation between routes. It just changes the URL when clicked and doesn’t apply any special styling to show which page is active.
              - NavLink works the same way for navigation, but it automatically detects if its route matches the current page and adds an “active” class or style to highlight it.
              - In short, use Link when you just want navigation, and use NavLink when you want to visually show which route is currently active (like in a navbar).
            */}

                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
                        Home
                    </NavLink>

                    {/* or */}

                    {/* <NavLink
                        to="/about"
                        className={(navData) => (navData.isActive ? "active" : "")}>
                    </NavLink> */}

                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active-link" : ""}>
                        Dashboard
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar


//Notes--------------------------------------------------->


{/* <NavLink> passes an object to your function that contains { isActive, isPending, isTransitioning }.
You usually destructure it like this:

({ isActive }) => isActive ? "active" : ""


because isActive is a property inside that object.
Using (isActive) alone is wrong — it receives the whole object, not just the boolean value. */}