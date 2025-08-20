import React, { useState } from 'react'
import { Link } from "react-router-dom";

import './nav.scss'
import logoSrc from '/assets/images/logo.png'
import { IoIosCloseCircleOutline, IoIosArrowDropdown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const NavMenu = ({setIsMouseEnter, isMouseEnter}) => {

  const variants = {
    hidden: {
      y: "-10px",
      opacity: 0,
      height: '0px',
      transition: { duration: 0.2, ease: "easeInOut" }
    },
    visible: {
      y: 0,
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, ease: "linear" }
    },
    exit: {
      y: "-10px",
      opacity: 0,
      height: '0px',
      transition: { duration: 0.2, ease: "easeInOut" }
    }
  }

  return (
    <div className="nav-menu_wrapper">
      <Link onClick={()=>setIsOpen(false)} to="/" className='nav-link'>Home</Link>
      <Link 
        onClick={()=>setIsOpen(false)} 
        onMouseEnter={() => setIsMouseEnter(true)}
        onMouseLeave={() => setIsMouseEnter(false)}
        className='nav-link' to="/services/skin-care">
        <span className="dropdown-span">
          Service <IoIosArrowDropdown/>
        </span>
        <AnimatePresence>
          {isMouseEnter && 
            <motion.ul 
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
              className='dropdown-ul'>
              <li className='dropdown-li'>
                <Link to="/services/skin-care">Facial Services</Link>
              </li>
              <li className='dropdown-li'>
                <Link to="/services/hairloss-prevention-removal">
                  Hair Loss Prevention <br/> & Hair Removal
                </Link>
              </li>
              <li className='dropdown-li'>
                <Link to="/services/permanent-makeup">
                  Permanent Makeup
                </Link>
              </li>
            </motion.ul>}
        </AnimatePresence>
      </Link>
      <Link onClick={()=>setIsOpen(false)} className='nav-link' to="/price">Price</Link>
      <Link onClick={()=>setIsOpen(false)} className='nav-link' to="/promotions">Promotions</Link>
    </div>
  )
}

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [isMouseEnter, setIsMouseEnter] = useState(false)

  const variants = {
    hidden: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "linear" }
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.1, ease: "easeInOut" }
    }
  };

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
          <NavMenu setIsMouseEnter={setIsMouseEnter} isMouseEnter = {isMouseEnter}/>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div id="mobile-nav-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
          >
            <NavMenu setIsMouseEnter={setIsMouseEnter} isMouseEnter = {isMouseEnter}/>
            <IoIosCloseCircleOutline className='close-svg' onClick={() => setIsOpen(!isOpen)} />
          </motion.div>
        )}
       
      </AnimatePresence>
    </nav>
  )
}

export default Nav
