import React, { useEffect, useRef, useState } from 'react'
import './secondaryhero.scss'
import { motion, useAnimation } from "framer-motion";

const SecondaryHero = ({heroImage, title, subtitle}) => {

  const textVariants = {
    hidden: {opacity:0, x:-50},
    visible: {opacity:1, x:0}
  }

  return (
    <section className='secondary-hero-section'>
      <div className="container">
        <div className="content_wrapper">
          <motion.div className="heading-wrapper"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{duration: 0.8, ease: "easeOut", delay:0.5}}
          >
            <h1>{title}</h1>
            <p>
             {subtitle}
            </p>
            <div className="cta-wrapper">
              <button>Services</button>
            </div>
          </motion.div>
        </div>
        <div className="hero-image_wrapper" >
          <img src={heroImage} alt="" />
        </div>
      </div>
    </section>
  )
}

export default SecondaryHero
