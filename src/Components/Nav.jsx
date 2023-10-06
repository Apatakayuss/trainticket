import React from 'react'
import '../Components/styles/Nav.css'
import BTN from './UI/Button'

const Nav = () => {
  return (
    <div className='nav-container'>Nav
        <div className="nav-card">
            <div className="logo">
                <p>LOGO</p>
            </div>
            <div className="nav-links">
                <ul>
                    <li><a href="/">Navlink</a></li>
                    <li><a href="/">Navlink</a></li>
                    <li><a href="/">Navlink</a></li>
                    <li><a href="/">Text</a></li>
                </ul>
            </div>
            <div className="nav-btn">
                <BTN>
                    Book Now
                </BTN>
            </div>
        </div>
    </div>
  )
}

export default Nav