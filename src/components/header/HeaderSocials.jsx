import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import{BiLogoInstagramAlt} from 'react-icons/bi'
import{ImGithub} from 'react-icons/im'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target='_blank'><BsLinkedin/></a>
        <a href="https://instagram.com" target='_blank'><BiLogoInstagramAlt/></a>
        <a href="https://github.com" target='_blank'><ImGithub/></a>
    </div>
  )
}

export default HeaderSocials