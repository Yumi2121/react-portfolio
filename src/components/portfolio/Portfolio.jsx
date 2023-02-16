import React from 'react'
import './portfolio.css'
import POF1 from '../../assets/images/portfolio1.png'
import POF2 from '../../assets/images/portfolio2.png'
import POF3 from '../../assets/images/portfolio3.jpg'

const data = [
  {
    id: 1,
    image: POF1,
    title: 'EasyPark Application',
    github: 'https://github.com/Yumi2121/EasyPark_App',
    demo: 'https://github.com/Yumi2121/EasyPark_App'
  },
  {
    id: 2,
    image: POF2,
    title: 'EasyPark Application',
    github: 'https://github.com/Yumi2121/EasyPark_App',
    demo: 'https://github.com/Yumi2121/EasyPark_App'
  },
  {
    id: 3,
    image: POF3,
    title: 'EasyPark Application',
    github: 'https://github.com/Yumi2121/EasyPark_App',
    demo: 'https://github.com/Yumi2121/EasyPark_App'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo})=> {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
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