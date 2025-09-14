import React from 'react';
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='NavBar'>
       <ul className='NavMenu'>
        <li>Home</li>
        <li>About</li>
        <li>Project</li>
        <li>Contact</li>
       </ul>

       <button className="ConnectWithMeBtn" > Connect with me </button>
    </div>
  )
}

export default NavBar