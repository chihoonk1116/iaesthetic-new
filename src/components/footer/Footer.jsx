import React from 'react'
import './footer.scss'
import { FaGoogle, FaYelp, FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="top">
          <div className="wrapper sitemap-wrapper">
            <p>Site Map</p>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Prices</li>
              <li>Promotions</li>
            </ul>
          </div>
          <div className="wrapper icons-wrapper">
            <p>Get More Info</p>
            <div className="icons">
              <FaGoogle />
              <FaYelp />
            </div>
          </div>
          <div className="wrapper info-wrapper">
            {/* <p>Hours</p> */}
            <div className="info">
              <div className='addressandphone'>
                <p><FaMapMarkerAlt/> 40-21 159th St B 201, Flushing, NY 11358</p>
                <p><FaPhone/> (347) 783-6550</p>
              </div>
              <div className="hours">
                <ul>
                  <li>Monday – Friday</li>
                  <li>10am – 6pm</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-div" />
        <div className="bottom">
          <p>
            © {new Date().getFullYear()} I-Aesthetics All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
