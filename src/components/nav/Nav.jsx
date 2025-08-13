import React, { useState } from 'react'
import './nav.scss'
import logoSrc from '/assets/images/logo.png'
import { IoIosCloseCircleOutline } from "react-icons/io";


function navMenu(){
  return (
    <div className="nav-menu_wrapper">
      <p className='nav-link'>Home</p>
      <p className='nav-link'>Service</p>
      <p className='nav-link'>Price</p>
      <p className='nav-link'>Promotions</p>
    </div>
  )
}

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='nav-container'>
      <div className="nav-wrapper">
        <div className="nav_logo-wrapper">
          <img src={logoSrc} alt="" />
        </div>
        <div
            onClick={() => setIsOpen(!isOpen)}
            className={`nav-button ${isOpen ? "active" : ''}`}
          >
          <div className="bar"/>
          <div className="bar"/>
          <div className="bar"/>
        </div>
        <div id="desktop-nav-menu">
          {navMenu()}
        </div>
      </div>
      {/* <div id="mobile-nav-menu" className={`${isOpen ? 'active' : ''}`}>
        {navMenu()}
        <IoIosCloseCircleOutline onClick={() => setIsOpen(!isOpen)} />
      </div> */}
    </nav>
  )
}

export default Nav
