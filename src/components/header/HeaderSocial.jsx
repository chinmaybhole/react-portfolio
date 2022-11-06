import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import {IoLogoInstagram} from 'react-icons/io'



export const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/chinmaybhole"><AiFillLinkedin/></a>
        <a href="https://github.com/chinmaybhole"><BsGithub/></a>
        <a href="https://github.com/chinmaybhole"><IoLogoInstagram/></a>
    </div>
  )
}
