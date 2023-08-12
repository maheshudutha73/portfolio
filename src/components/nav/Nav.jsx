import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
// import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {GoProjectSymlink} from 'react-icons/go'
const Nav = () => {
  const[activenav,setactivenav]=useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setactivenav('#')} className={activenav==='#'? 'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setactivenav('#about')} className={activenav==='#about'? 'active':''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setactivenav('#experience')} className={activenav==='#experience'? 'active':''}><BiBook/></a>
      {/* <a href="#services" onClick={()=>setactivenav('#services')} className={activenav==='#services'? 'active':''}><RiServiceLine/></a> */}
      <a href="#portfolio" onClick={()=>setactivenav('#portfolio')} className={activenav==='#portfolio'? 'active':''}><GoProjectSymlink/></a>
      <a href="#contact" onClick={()=>setactivenav('#contact')} className={activenav==='#contact'? 'active':''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav