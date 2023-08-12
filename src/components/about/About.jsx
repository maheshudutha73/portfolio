import React from 'react'
import "./about.css"
import me2 from '../../assets/me2.jpeg'
import{FaAward} from 'react-icons/fa'
import{FaFolderOpen} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img className='image' src={me2} alt="pic missing" />
          </div>
        </div>
      

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
          <FaAward className='about__icons'/>
            <h5>Experience</h5>
            <small>Fresher</small>
          </article>
          <article className="about__card">
          <FaFolderOpen className='about__icons'/>
            <h5>Projects</h5>
            <small>10+ Completed</small>
          </article>
          
        </div>
        <p>Bachelor's Degree in computer science. Ability to work with HTML and CSS and Java Script and ReactJS. Can work well under pressure and make the best of any situation. Having very good interpersonal skills and communication skills(immediate joinee)</p>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
      
      
    </section>
  )
}

export default About