import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import { HeaderSocial } from './HeaderSocial'

export const Header = () => {
  return (
    <header>
      {/* Bim naming conventions */}
      <section className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Chinmay Bhole</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className='me'>
          {/* <img src={ME} alt="me" /> */}
        </div>

        <a href="#contact" className='scroll__down'>
          Scroll Down
        </a>

      </section>

    </header>
  )
}
