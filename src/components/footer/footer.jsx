import React from 'react'
import './footer.css'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Muhammad Hasham Khan</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>

      <div className="footer__socials">
        <a href="https://fb.com/hashamkhan900"><FaFacebook/></a>
        <a href="https://insta.com/hashamkhan900"><FaInstagram/></a>
        <a href="https://twitter.com/hashamkhan900"><FaTwitter/></a>
      </div>

      <div className="footer__copyrights">
        <small>&copy; Muhammad Hasham Khan. All Rights Reserved.</small>
         
      </div>   

    </footer>
  )
}

export default footer