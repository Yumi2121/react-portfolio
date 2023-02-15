import React from 'react'
import './header.css'
import CTA from './CTA'
import ME1 from '../../assets/images/me1_nobgcopy.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm </h5>
        <h1>Zumin Yu</h1>
        <h5 className="text-light">
          Fullstack Developer
        </h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME1} alt='me' />
        </div>

        <a href='#contact' className='scroll-down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header