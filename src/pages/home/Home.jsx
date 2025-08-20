import React, { useState, useEffect } from 'react'
import './home.scss'
import Hero from '../../components/hero/Hero'
import Services from '../../components/services/Services'
import WhyChooseUs from '../../components/whyChooseUs/WhyChooseUs'
import Testimonial from '../../components/testimonial/Testimonial'
import QnA from '../../components/qna/QnA'
import ContactForm from '../../components/contactForm/ContactForm'
import Location from '../../components/location/Location'
import LoadingSpinner from '../../components/loadingSpinner/LoadingSpinner'


const Home = () => {

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
        if(data) setReviews(data)
        setIsLoading(false)
      })
      .catch(console.error)
  }

  useEffect(() => {
    if(!isLoading) return
    fetchReviews()
  }, [])
  

  return (
    <>
      <LoadingSpinner active={isLoading} />
      {!isLoading && (
        <>
          <Hero/>
          <Services/>
          <WhyChooseUs/>
          <Testimonial reviewData={reviews}/>
          <QnA/>
          <ContactForm/>
          <Location/>
        </>
      )}
      
    </>
  )
}

export default Home
