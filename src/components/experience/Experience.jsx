import React from 'react'
import './experience.css'
import {BiSolidCheckShield} from 'react-icons/bi'
import {MdSchool} from 'react-icons/md'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>Education & My Experience</h2>
      <div className="container experience__conatainer">
        <div className='experience__frontend'>
          <h3>Education</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <MdSchool className='experience__details-icons'/>
            <div>
             <h4>SSC </h4>
             <small className='text-light'>2013</small>
            </div>
            </article>
            <article className='experience__details'>
            <MdSchool className='experience__details-icons'/>
           <div>
            <h4>INTERMEDIATE</h4>
            <small className='text-light'>2016</small>
           </div>
            </article>
            <article className='experience__details'>
            <MdSchool className='experience__details-icons'/>
            <div>
            <h4>BACHELOR'S DEGREE</h4>
            <small className='text-light'>2019</small>
            </div>  
            </article>
            <article className='experience__details'>
            <MdSchool className='experience__details-icons'/>
            <div>
            <h4>MCA</h4>
            <small className='text-light'>2024</small>
            </div>
            </article>
           
          </div>
        </div>
        <div className='experience__frontend'>
          <h3>Front-End-Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BiSolidCheckShield className='experience__details-icons'/>
            <div>
             <h4>HTML</h4>
             <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <BiSolidCheckShield className='experience__details-icons'/>
           <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
           </div>
            </article>
            <article className='experience__details'>
            <BiSolidCheckShield className='experience__details-icons'/>
            <div>
            <h4>JAVA SCRIPT</h4>
            <small className='text-light'>Intermediate</small>
            </div>  
            </article>
            <article className='experience__details'>
            <BiSolidCheckShield className='experience__details-icons'/>
            <div>
            <h4>REACT JS </h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
           
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience