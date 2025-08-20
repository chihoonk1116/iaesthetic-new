import React from 'react'
import './serviceDescriptionCard.scss'

const ServiceDescriptionCard = ({data}) => {

  return (
    <div className='description-card_container'>
      <div className="description-card">
        <div className="description-card_left">
          <div className="description-card_left-top">
            <p className='description-card_order'>{data.subTitle}</p>
            <h3>{data.title}</h3>
          </div>
          <div 
            className="description-card_left-bottom"
          >
            <img src={data.imgSrc} alt="" />
          </div>
        </div>
        <div className="description-card_right">
          <p>
            {data.description}
          </p>
          <ul>
            {data.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ServiceDescriptionCard
