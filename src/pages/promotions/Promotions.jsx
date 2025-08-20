import React from 'react'
import './promotions.scss'
import SecondaryHero from '../../components/secondary-hero/SecondaryHero'
import serviceHeroImage from '/assets/images/promotionbg.jpg'
import PromotionSection from '../../sections/promotionSection/PromotionSection'


const Promotions = () => {

  return (
    <div className='promotion-page'>
      <SecondaryHero 
        heroImage={serviceHeroImage} 
        title= {`Promotions`}
        subtitle = {`20 years in the game, and we’re still all about perfecting your skin!`}
      />
      <PromotionSection/>
    </div>
  )
}

export default Promotions
