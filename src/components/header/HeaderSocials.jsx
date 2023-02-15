import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        {/* give the tartget _blank means open a new tab */}
        <a href='https://www.linkedin.com/in/zumin-yu/' target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/Yumi2121/' target='_blank' rel="noreferrer"><FaGithub /></a>
        <a href='https://www.linkedin.com/in/zumin-yu/' target='_blank' rel="noreferrer"><MdEmail /></a>
    </div>
  )
}

export default HeaderSocials