import React, {useRef} from 'react'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import './promotionSection.scss'
import { promotions } from '../../constants'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const PromotionSection = () => {

  const promotionRefs = useRef([])

  useGSAP(() => {
    promotionRefs.current.forEach((el) => {
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

  function getDate(){
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    const formattedDate = `${year}.${month}.${day}`;

    return formattedDate
  }

  return (
    <section className='promotion_section'>
      <div className="section-heading">
        <h2>Active Promotions</h2>
        <p>{getDate()}</p>
      </div>
      <div className="container">
        {promotions.map((promotion, index) => (
          <div 
            className="promotion-card"
            ref={(el) => (promotionRefs.current[index] = el)}
            style={{marginBottom: `calc(${(promotions.length - index - 1) * 5}rem)`}}
          >
            <div className="promotion-card_left">
              <p className='promotion-card_order'>01</p>
              <div className="">
                <h3>{promotion.title}</h3>
                <p>{promotion.description}</p>
              </div>
            </div>
            <div className="promotion-card_right">
              <img src={promotion.imageSrc} alt="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PromotionSection
