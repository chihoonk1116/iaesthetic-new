import React from 'react'
import './home.scss'
import Hero from '../../components/hero/Hero'
import Services from '../../components/services/Services'
import WhyChooseUs from '../../components/whyChooseUs/WhyChooseUs'
import Testimonial from '../../components/testimonial/Testimonial'
import QnA from '../../components/qna/QnA'
import ContactForm from '../../components/contactForm/ContactForm'
import Location from '../../components/location/Location'
import Footer from '../../components/footer/Footer'


const Home = () => {
  return (
    <>
      <Hero/>
      <Services/>
      <WhyChooseUs/>
      <Testimonial/>
      <QnA/>
      <Location/>
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default Home
