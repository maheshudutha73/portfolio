import React from 'react'
import './portfolio.css'
import pro1 from '../../assets/pro1.jpg'
import pro2 from '../../assets/pro2.jpg'
import pro3 from '../../assets/pro3.jpg'
import empty from '../../assets/empty.jpg'
import pro4 from '../../assets/pro4.jpg'
import pro5 from '../../assets/pro5.jpg'
import pro6 from '../../assets/pro6.jpg'

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
            <img src={pro4} alt="pic missing" />
          </div>
          <h3>Random Quote Generator</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" target='_blank' className='btn'>Github</a>
          <a href="https://github.com" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pro5} alt="pic missing" />
          </div>
          <h3>E-COMMERCES Web-site</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" target='_blank' className='btn'>Github</a>
          <a href="https://github.com" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pro6} alt="pic missing" />
          </div>
          <h3>Stopwatch</h3>
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