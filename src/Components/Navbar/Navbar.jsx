import React from 'react'
import './navbar.css'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <div className="Navbar">
        <div className="wasteDiv"></div>
        <div className="barDiv">
            <ul>
                <Link className='navLink' to='/home'>
                <li>Home</li>
                </Link>
                <Link className='navLink' to='/products'>
                <li>Products</li>
                </Link>
                <Link className='navLink' to='/users'>
                <li>Users</li>
                </Link>
                <Link className='navLink' to='/contact'>
                <li>Contact</li>
                </Link>
                <Link className='navLink' to='/login'>
                <li>Logout</li>
                </Link>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar