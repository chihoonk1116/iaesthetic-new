import React, { useEffect, useState } from 'react'
import './testimonial.scss'
import ReviewMarquee from '../reviewMarquee/ReviewMarquee'

const Testimonial = () => {

  const [reviews, setReviews] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchReviews = () => {
    fetch('https://business-auth-870823360560.northamerica-northeast2.run.app/reviews')
      .then(res => {
        if(res.status === 401){
          window.location.href = 'https://business-auth-870823360560.northamerica-northeast2.run.app/auth'
          return
        }
        return res.json()
      })
      .then(data => {
        console.log(data)
        if(data) setReviews(data)
        setIsLoading(false)
      })
      .catch(console.error)
  }

  useEffect(() => {
    if(reviews.length > 0) return
    fetchReviews()
  }, [])

   if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <section className='testimonial-section'>
      <div className='container'>
        <h2>
          buzz from our <br/>
          <span className='highlight'>glow-getters</span>
        </h2>
        <div className="review-marquees-wrapper">
          <ReviewMarquee 
            reviews={reviews.slice(0, Math.ceil(reviews.length / 2))} 
            animation="marquee 30s linear infinite"
          />
          <ReviewMarquee 
            reviews={reviews.slice(Math.ceil(reviews.length / 2))}
            animation="marqueeRev 30s linear infinite"
          />
        </div>
      </div>
    </section>
  )
}

export default Testimonial
