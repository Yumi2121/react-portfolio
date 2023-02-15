import React from 'react'
import './about.css'
import Me from '../../assets/images/me2.JPG'
import { FaAward } from 'react-icons/fa'
import {VscFolderOpened} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

    <div className="container about_container">
      <div className="about_me">
        <div className="about_me-image">
          <img src={Me} alt='aboutme' />
        </div>
      </div>

      <div className='about_content'>
        <div className='about_cards'>
          <article className='about_card'>
            <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>1+ Year Working</small>
          </article>

          <article className='about_card'>
            <VscFolderOpened className='about_icon'/>
            <h5>Projects</h5> 
            <small>10+ completed</small>
          </article>
        </div>

        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. 
        </p>

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    
  </section>
  )
}

export default About