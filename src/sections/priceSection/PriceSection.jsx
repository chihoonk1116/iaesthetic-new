import React from 'react'
import './priceSection.scss'

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useMediaQuery } from "react-responsive"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import {prices} from '../../constants/index'

const PriceSection = () => {

  const priceRefs = useRef([])
  const isDesktop = useMediaQuery({minWidth: "768px"})
  const isMobileSM = useMediaQuery({maxWidth: "433px"})



  useGSAP(() => {
    priceRefs.current.forEach((el) => {
      if (!el) return;
      gsap.from(el, {
        y: 200,
        opacity: 0,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
        duration: 1,
        ease: "circ.out",
        stagger: 0.2
      });
    });
  }, []);

  return (
    <section className='price_section'>
      <div className="container">
        {prices.map((data, index) => (
          <div 
            className='price_container'
            ref={(el) => (priceRefs.current[index] = el)}
            key={index}
            style={
              isDesktop 
                ? {
                  top: `calc(10vh + ${index * 5}em + ${index * 2}px)`,
                  marginBottom: `calc(${(prices.length - index - 1) * 5}rem - ${index * 2}px)`
                }
                : 
                !isMobileSM ?
                  { //tablet
                    top: `calc(10vh + ${index * 3}em + ${index * 8}px)`,
                    marginBottom: `calc(${(prices.length - index - 1) * 3}rem - ${index * 4}px)`
                  }
                  :
                  index !== 1 ? {
                    top: `calc(10vh + ${index * 3}em + ${index * 8}px)`,
                    marginBottom: `calc(${(prices.length - index - 1) * 4}rem - ${index * 10}px)`
                  }
                  :
                  {
                    //mobile and second container
                    top: `calc(10vh + ${index * 2}em + ${index * 10}px)`,
                    marginBottom: `calc(${(prices.length - index - 1) * 4}rem - ${index * 2}px)`
                    
                  }
            }
          >
            <h2 className="">{data.title}</h2>
            <div className="price_container_content">
              <ul>
                {data.content.map((priceList, index) => (
                  <li key={index}>
                    <p>{priceList.serviceName}</p>
                    <p>{priceList.price}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className="dummy"></div>
      </div>
    </section>
  )
}

export default PriceSection
