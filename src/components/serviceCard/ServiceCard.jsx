import React from 'react'
import './serviceCard.scss'
import CrossStarParticles from '../particles/CrossStarParticles'

const ServiceCard = ({
  title, description ,services, services2 = null, OnParticles, subTitles = null, imageSrc
}) => {
  return (
    <div className='servicecard-container'>
      {OnParticles && 
        <CrossStarParticles count={100} blinkProbability={0.4}/>
      }
      <div className="content-wrapper">
        <div className="image-wrapper">
          <img src={imageSrc} alt="" />
        </div>
        <div className="content">
          <h4 className='title'>{title}</h4>
          <div className="bottom">
            <p className='description'>{description}</p>
            <div className="service-list-wrapper">
              <ul className='service-list'>
                {services.map((list, index) => (
                  <li key={index}>{list}</li>
                ))}
                {subTitles ?
                  <button>{subTitles[0]}</button>
                  :
                  <button>View services</button>
                }
              </ul>
              {services2 && 
                <ul className='service-list'>
                  {services2.map((list, index) => (
                    <li key={index}>{list}</li>
                  ))}
                  <button>{subTitles[1]}</button>
                </ul>
              }
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
