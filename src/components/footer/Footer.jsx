import React from 'react'
import './footer.css'
import {FaLinkedinIn} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'
import {MdEmail} from 'react-icons/md'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Zumin Yu</a>

      <ul className="permalinks">
        <li><a href='#' >Home</a></li>
        <li><a href='#about' >About</a></li>
        <li><a href='#experience' >Experience</a></li>
        <li><a href='#services' >Services</a></li>
        <li><a href='#portfolio' >Portfolio</a></li>
        <li><a href='#testimonials' >Testimonials</a></li>
        <li><a href='#contact' >Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href='https://www.linkedin.com/in/zumin-yu/' target='_blank' rel="noreferrer"><FaLinkedinIn /></a>
        <a href='https://github.com/Yumi2121/' target='_blank' rel="noreferrer"><FiGithub /></a>
        <a href='https://www.linkedin.com/in/zumin-yu/' target='_blank' rel="noreferrer"><MdEmail /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Zumin Yu. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer