import React from 'react'
import './testimonial.scss'
import ReviewMarquee from '../reviewMarquee/ReviewMarquee'

const Testimonial = ({reviewData}) => {

  const filteredData = reviewData.filter(
    review => review.starRating === 'FIVE' || review.starRating === 'FOUR')
  
  return (
    <section className='testimonial-section'>
      <div className='container'>
        <h2>
          buzz from our <br/>
          <span className='highlight'>glow-getters</span>
        </h2>
        <div className="review-marquees-wrapper">
          <ReviewMarquee 
            reviews={filteredData.slice(0, Math.ceil(reviewData.length / 2))} 
            animation="marquee 30s linear infinite"
          />
          <ReviewMarquee 
            reviews={filteredData.slice(Math.ceil(reviewData.length / 2))}
            animation="marqueeRev 30s linear infinite"
          />
        </div>
      </div>
    </section>
  )
}

export default Testimonial
