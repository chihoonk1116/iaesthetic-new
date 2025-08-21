import './services.scss'
import ServiceCard from '../serviceCard/ServiceCard'
import React from 'react'

import skincareImageSrc from '/assets/images/skincare.jpg'
import legImageSrc from '/assets/images/leg.jpg'
import eyebrowImageSrc from '/assets/images/eyebrow.jpg'

const Services = () => {
  return (
    <section className='service-section'>
      <div className="container">
        <h3><span className='highlight'>Tailored</span> skincare for <span className='highlight'>every</span> type</h3>
        <div className="service-cards-wrapper">
          <ServiceCard 
            title="Signature Facials & Anti-aging" 
            description="Enjoy the benefits of healthier, more radiant skin with our exclusive Signature Facials — each treatment carefully designed to target specific skin needs and deliver visible, lasting results." 
            services={['European Deep Cleansing', 'Hydroimpact', 'Acne Repair']} 
            services2={['V-MAX', 'Rejuran', 'Exosome']} 
            OnParticles="true"
            subTitles={['Signature Facials', 'Anti-againg & Lifting']}
            imageSrc = {skincareImageSrc}
            id = 'facial-service'
          />
          <ServiceCard 
            title={`Hair Loss Prevention\n& Hair Removal`}
            description="Experience advanced solutions that restore confidence — from strengthening and revitalizing thinning hair to achieving smooth, hair-free skin with lasting results." 
            services={['DS scalp care', 'Aton Laser Waxing', 'Waxing']} 
            imageSrc = {legImageSrc}
            id = 'hairservice-card'
          />
          <ServiceCard 
            title="Permanent Makeup" 
            description="Wake up flawless every day with expertly applied enhancements that define your natural beauty and save time in your routine." 
            services={['eyebrow','eyeline','lipline']} 
            imageSrc = {eyebrowImageSrc}
            id = 'makeupservice-card'
          />
        </div>
      </div>
      
    </section>
  )
}

export default Services
