import React from 'react'

import './orbitingCircles.scss'


const OrbitingCircles = ({radius, statements}) => {

  const numIcons = statements.length
  const baseAngleStep = 360 / numIcons


  return (
    <div 
      className='orbit-container' 
      style={{'width' : radius * 2, 'height' : radius * 2}}
    >
      <div className="orbit-circle">
        {statements.map((statement, index) => {
          const currentAngle = index * baseAngleStep
          return (
            <div  
              key={index} 
              className='orbit-circle_item' 
              style={{
                '--angle': currentAngle,
                '--radius' : radius,
              }} >
                <div className="orbit-circle_icon">
                  {statement}
                </div>
            </div>
          )

        })}
      </div>
    </div>
  )
}

export default OrbitingCircles
