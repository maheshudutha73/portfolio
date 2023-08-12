import React from 'react'
import './footer.css'
import{BsLinkedin} from 'react-icons/bs'
import{BiLogoInstagramAlt} from 'react-icons/bi'
import{ImGithub} from 'react-icons/im'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'> Mahesh Udutha</a>
      <ul className="links">
       <li> <a href="#">Home</a> </li>
       <li> <a href="#about">About</a> </li>
       <li> <a href="#experience">Experience</a> </li>
       <li> <a href="#services">Services</a> </li>
       <li> <a href="#portfolio">Portfolio</a> </li>
       <li> <a href="#contact">Contact</a> </li>
      </ul>
      <div className="footer__Socials">
        <a href="https://linkedin.com" target='_blank'> <BsLinkedin/></a>
        <a href="https://instagram.com" target='_blank'><BiLogoInstagramAlt/></a>
        <a href="https://github.com" target='_blank'> <ImGithub/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; MaheshUdutha. All rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer