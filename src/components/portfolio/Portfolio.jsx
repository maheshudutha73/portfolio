import React from 'react'
import './portfolio.css'
import pro1 from '../../assets/pro1.jpg'
import pro2 from '../../assets/pro2.jpg'
import pro3 from '../../assets/pro3.jpg'
import empty from '../../assets/empty.jpg'
import pro4 from '../../assets/pro4.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pro1} alt="pic missing" />
          </div>
          <h3>Food Recipe Finder</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" target='_blank' className='btn'>Github</a>
          <a href="https://github.com" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pro2} alt="pic missing" />
          </div>
          <h3>Calculator</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" target='_blank' className='btn'>Github</a>
          <a href="https://github.com" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pro3} alt="pic missing" />
          </div>
          <h3>To-Do-List</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" target='_blank' className='btn'>Github</a>
          <a href="https://github.com" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pro4} alt="" />
          </div>
          <h3>Random Quote Generator</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" target='_blank' className='btn'>Github</a>
          <a href="https://github.com" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={empty} alt="" />
          </div>
          <h3>This is a portfolio Title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" target='_blank' className='btn'>Github</a>
          <a href="https://github.com" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={empty} alt="" />
          </div>
          <h3>This is a portfolio Title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" target='_blank' className='btn'>Github</a>
          <a href="https://github.com" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio