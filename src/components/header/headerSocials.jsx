import React from 'react'
import {BsLinkedin, BsFacebook} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'



const headerSocials = () => {
  return (
    <div className='header__socials'>
        <a href="" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="" target="_blank" rel="noreferrer"><BsFacebook/></a>
    </div>
  )
}

export default headerSocials