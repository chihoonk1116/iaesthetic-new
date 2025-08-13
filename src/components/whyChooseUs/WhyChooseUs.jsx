import React, { useEffect, useState } from 'react'
import OrbitingCircles from '../orbitingCircles/OrbitingCircles'
import './whychooseus.scss'
import logoSrc from '/assets/images/logo.png'
import { IoCheckmark } from "react-icons/io5";

const WhyChooseUs = () => {

  const [curWidth, setCurWidth] = useState(window.innerWidth)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setCurWidth(window.innerWidth)
      if(window.innerWidth >= 576){
        setIsMobile(false)
      }
      else if(window.innerWidth < 576){
        setIsMobile(true)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)

  }, [])

  return (
    <section className='whychooseus-section'>
      <div className="container">
        <div className="whychooseus-text-contents">
          <h2>Why Choose Us</h2>
          <h2 className='subtitle'>
            <span className='highlight'>i </span> 
            intimate {" "} <br></br>
            <span className='highlight'>aesthetic </span> 
            beauty
          </h2>
          <h3>
            We are committed to elevate skin care experience, 
            offering you personalized and intimate treatments to bring out your best glow.
          </h3>
          <ul>
            <li><IoCheckmark />20+ years of experience</li>
            <li><IoCheckmark />All-in-one machine-assisted facials</li>
            <li><IoCheckmark />Customized skincare for each client</li>
            <li><IoCheckmark />Safe, clean, welcoming space</li>
          </ul>
        </div>
        <div className="orbiting-circles-wrapper">
          <img src={logoSrc} alt="" />
          <OrbitingCircles 
            key={isMobile}
            radius={isMobile ? 180 : 260} 
            statements={
              ['Professional','intimate', 'passion','Honesty','Experienced','Aesthetic', 'trusted', 'focused']
            }
          />
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
