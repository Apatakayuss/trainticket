import React from 'react'
import '../Components/styles/Hero.css'
import Book from '../Components/Book'

const Hero = () => {
  return (
<div className="universal-container">
   <div className="Hero-container">
    <div className="hero">
    <div className="overlay">
        <div className="Hero-text">
            <h3>Welcome to book <span className='hero-span'>your</span> train</h3>
            <p>We saves your time both while purchasing, the check in and during the travel</p>
        </div>
        <div className="Hero-booking">
           <Book />
        </div>
        </div>
    </div>
   </div>
</div>
  )
}

export default Hero