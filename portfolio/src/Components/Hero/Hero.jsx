import React from 'react'
import './Hero.css'
import downloadIcon from '../../assets/download-icon1.png'

const Hero = () => {
  return (
    <div className='HeroSection'>

        <h1>I'm Sanjay,</h1>

        <p>"I'm a <strong>Frontend Developer</strong> focused on crafting responsive, accessible, and modern web applications. With a strong foundation in HTML, CSS, JavaScript, and React, I transform ideas into engaging digital experiences."</p>

        <div className="hero-action">
            <div className='hero-connect'>Connect</div>
            <div className='hero-resume'>My resume <img src= {downloadIcon}  /> </div>
        </div>
    </div>
  )
}

export default Hero