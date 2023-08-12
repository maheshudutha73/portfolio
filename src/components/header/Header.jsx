import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/me.jpeg'
import HeaderSocials from './HeaderSocials'
import{BsFillArrowDownSquareFill} from 'react-icons/bs'
import { Typewriter } from 'react-simple-typewriter'

const Header = () => {
  return (
   <header>
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h2>Mahesh Udutha</h2>
      <h5 className="type"> <Typewriter
            words={['Front-End-Developer', 'Software Developer', 'JavaScript Developer ', 'ReactJS Developer']}
            loop={Infinity}
            cursor
            cursorStyle='|'
            typeSpeed={50}
            deleteSpeed={70}
            delaySpeed={1000}
          /></h5>
      <CTA/>
      <a href="#contact" className='scroll__down'><BsFillArrowDownSquareFill/></a>
      <HeaderSocials/>
      <div >
        <img className='me' src={me} alt="Pic missing" />
      </div>
      
    </div>
   </header>
  ) 
}

export default Header