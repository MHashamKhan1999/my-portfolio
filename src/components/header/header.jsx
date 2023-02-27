import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me-about1.png'
import HeaderSocials from './headerSocials'



const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Muhammad Hasham Khan</h1>
        <div className="text-light">Production Head | Flutter Developer </div>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="My-Image"/>
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>        
      </div>
    </header>
  )
}

export default header