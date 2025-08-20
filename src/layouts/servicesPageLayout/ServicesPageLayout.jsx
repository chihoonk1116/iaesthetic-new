import React, { useEffect, useState, useRef } from 'react'
import './servicesPageLayout.scss'

import ServiceDescriptionCard from '../../components/serviceDescriptionCard/ServiceDescriptionCard'

const ServicesPageLayout = ({services, navMenus}) => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef(null)
  const progressBarRef = useRef(null)

  const descriptionRefs = useRef([]);
  const [opacities, setOpacities] = useState([]);


  const setRef = (el, index) => {
    if (el) {
      descriptionRefs.current[index] = el;
    }
  };

  const scrollToCard = (index) => {
    const el = descriptionRefs.current[index];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScroll = () => {
    if (sectionRef.current && progressBarRef.current){
      const section = sectionRef.current

      const sectionTop = section.getBoundingClientRect().top
      const sectionHeight = section.scrollHeight
      const viewportHeight = window.innerHeight

      const scrollableHeight = sectionHeight - viewportHeight

      if(sectionTop <= 0 && scrollableHeight > 0){
        const scrolled = Math.abs(sectionTop)

        let progress = (scrolled / scrollableHeight) * 100

        if(progress > 100){
          progress = 100
        }

        setScrollProgress(progress)
      }
      else{
        setScrollProgress(0)
      }
    }

    const viewportHeight = window.innerHeight


    const fadeOpacities = descriptionRefs.current.map((el, index) => {
      if (!el) return 1

      const rect = el.getBoundingClientRect()
      const elementCenter = rect.top + rect.height / 2
    
      let offset = 0 // px만큼 사라짐 시작 시점 늦추기
      if (index === descriptionRefs.current.length - 1) {
        offset = -100
      }
      const adjustedCenter = viewportHeight / 2 + offset

      let opacity = 1 - Math.min(
        Math.abs(adjustedCenter - elementCenter) / (viewportHeight / 2),
        1
      )

      opacity = Math.pow(opacity, 0.8)


      return Math.max(0, Math.min(1, opacity))
    })

    setOpacities(fadeOpacities)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className='facial-services_section' ref={sectionRef}>
      <div className="container">
        <div className="facial-services_heading">
          <div className="button-container">
              {navMenus.map((menu) => (
                <button onClick={() => scrollToCard(menu.pivot)}>
                  {menu.title}
                </button>
              ))}
            <div 
              className="progress-bar" 
              style={{width: `${scrollProgress}%`}} 
              ref={progressBarRef}
            />
          </div>
        </div>
        <div className="content-container">
          <div className="text-content_container">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-description"
                ref={(el) => setRef(el, index)} 
                style={{ opacity: opacities[index] }}
              >
                <ServiceDescriptionCard data={service} />
              </div>
            ))}
          </div>
          
        </div>
       
        
      </div>
    </section>
  )
}

export default ServicesPageLayout
