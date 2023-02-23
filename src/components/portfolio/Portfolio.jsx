import React from 'react'
import './portfolio.css'
import POF1 from '../../assets/images/portfolio1.png'
import POF2 from '../../assets/images/portfolio2.png'
import POF3 from '../../assets/images/portfolio3.png'
import {BiCheck} from 'react-icons/bi'

const data = [
  {
    id: 1,
    image: POF1,
    title: 'EasyPark Application',
    point1: "In collaboration with the organization's manager, we assessed the challenges, identified the problem, defined the requirements, developed the web application to present solution. ",
    point3: 'Created in JavaScript with MERN stack (MongoDB, EXpress.js, React.js and Node.js), testing with Jest Cypress and developed on AWS (EC2, Ubuntu, Nginx).',
    point2: "Application Features include user booking retrieve data through MongoDB, user login and authentication, locate car park's address using Google map API. ",       
    github: 'https://github.com/Yumi2121/EasyPark_App',
    demo: 'http://www.ezcarparkspot.com'
  },
  {
    id: 2,
    image: POF2,
    title: 'GarageSale Web App',
    point1: 'A prototype two-side marketplace app build with Ruby on Rails, in which users can upload, buy and sell their second-hand items. ',
    point2: "Features include image upload and retrieval using AWS S3, user login and authentication using Devise, locate seller's address using Google map, and payment using Strip.",
    point3: 'Created in Ruby on Rails with a PostgreSQL database and developed using CI/CD pipeline on Heroku. ',
    github: 'https://github.com/Yumi2121/Marketplace-Project--GarageSale_Web_Application',
    demo: 'https://github.com/Yumi2121/Marketplace-Project--GarageSale_Web_Application'
  },
  {
    id: 3,
    image: POF3,
    title: 'Hackathon - Dingo Weather app',
    point1: 'Build during a 36-hour hackathon, this app uses the Open Weather API and google Maps API to locate the city weather that user type in.',
    point2: "Features include search for locations using the Google Maps API, autocomplete functionality during search, and the display of weather information fetched from the Open Weather API ",
    point3: "Created in JavaScript, HTML, Bootstrap and CSS, developed on GitHub. ",
    github: 'https://github.com/Yumi2121/Dingo-Weather',
    demo: 'https://anthonymarkreynolds.github.io/Dingo-Weather/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, point1, point2, point3, github, demo})=> {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <ul className='project_content_list'>
                  <li>
                    <BiCheck className='project_list-icon' />
                    <p>{point1}</p>
                  </li>

                  <li>
                    <BiCheck className='project_list-icon' />
                    <p>{point2}</p>
                  </li>

                  <li>
                    <BiCheck className='project_list-icon' />
                    <p>{point3}</p>
                  </li>

                  {/* <li>
                    <BiCheck className='service_list-icon' />
                    <p>{point4}</p>
                  </li>

                  <li>
                    <BiCheck className='service_list-icon' />
                    <p>{point5}</p>
                  </li> */}
                </ul>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article> 
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio