import React from 'react'
import GoogleMapComponent from './GoogleMapComponent'
import './location.scss'
import { FaPhone } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

const Location = () => {
  return (
    <section className='location-section'>
      <div className="container">
        <h2>Location & Contact</h2>
        <div className="address-wrapper">
          <p><FaMapMarkerAlt />40-21 159th St B 201, Flushing, NY 11358</p>
          <p><FaPhone /> (347) 783-6550</p>
        </div>
        <GoogleMapComponent/>
      </div>
    </section>
  )
}

export default Location
