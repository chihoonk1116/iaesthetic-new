import React, { useEffect, useRef, useState } from 'react'
import './hero.scss'
import heroImage from '/assets/images/main-hero.jpg'
import AnimatedNumber from '../animatedNumber/AnimatedNumber';
import { IoIosArrowRoundForward } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {

  const [curWidth, setCurWidth] = useState(window.innerWidth)
  const [factor, setFactor] = useState(1.5)

  const starRefs = useRef([])
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    },
    hidden: {},
  
  }

  const starVariants = {
    hidden: {opacity: 0, scale: 0},
    visible: {
      opacity: 1,
      scale: 1,
      transition: {type:"spring", stiffness: 300, damping: 20}
    },
  }

  const textVariants = {
    hidden: {opacity:0, x:-50},
    visible: {opacity:1, x:0}
  }

  const controls = useAnimation()

  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start("visible")
    }, 1000)

    return () => clearTimeout(timer)
  }, [controls])

  useEffect(() => {
    const jumpInterval = setInterval(() => {
      starRefs.current.forEach((star, i) => {
        if(star){
          setTimeout(() => {
            star.classList.add("jump")
            setTimeout(() => star.classList.remove("jump"), 600)
          }, i * 60)
        }
      })
    },3000)

    const handleResize = () => {
      setCurWidth(window.innerWidth)
      if(factor !== 1.3 && window.innerWidth >= 768){
        setFactor(1.3)
      }
      if(factor !== 0.8 && window.innerWidth < 768){
        setFactor(0.7)
      }
    }
    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(jumpInterval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className='hero-section'>
      <div className="container">
        <div className="content_wrapper">
          <div className="indicator-animation">
            <p>
              <AnimatedNumber to={20} duration={3}/>+ years and
            </p>
            <motion.div 
              className="stars-wrapper"
              variants={containerVariants}
              initial = "hidden"
              animate = {controls}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div  
                  key={i} 
                  variants={starVariants}
                  ref={(el) => (starRefs.current[i] = el)}
                >
                  <FaStar/>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.div className=""
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{duration: 0.8, ease: "easeOut", delay:0.5}}
          >
            <h1>Expert Skincare & Facial Spa <br></br> in Flushing, NY</h1>
            <p>
              Personalized facial treatments, laser care, and permanent makeup- trusted by locals for over 20 years 
            </p>
            <div className="cta-wrapper">
              <button>Services</button>
              <IoIosArrowRoundForward />
            </div>
          </motion.div>
        </div>
        <div 
          className="hero-image_wrapper" 
          style={
            curWidth < 996
              ? { right: `${-(1000 - curWidth) * factor}px` }
              : {}
          }
        >
          <img src={heroImage} alt="" />
        </div>
        {curWidth < 768 && 
          <div className="bottom-gradient"></div>
        }
      </div>
    </section>
  )
}

export default Hero
