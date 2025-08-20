import React from 'react'
import './testimonial.scss'
import ReviewMarquee from '../reviewMarquee/ReviewMarquee'

const Testimonial = ({reviewData}) => {
  return (
    <section className='testimonial-section'>
      <div className='container'>
        <h2>
          buzz from our <br/>
          <span className='highlight'>glow-getters</span>
        </h2>
        <div className="review-marquees-wrapper">
          <ReviewMarquee 
            reviews={reviewData.slice(0, Math.ceil(reviewData.length / 2))} 
            animation="marquee 30s linear infinite"
          />
          <ReviewMarquee 
            reviews={reviewData.slice(Math.ceil(reviewData.length / 2))}
            animation="marqueeRev 30s linear infinite"
          />
        </div>
      </div>
    </section>
  )
}

export default Testimonial
