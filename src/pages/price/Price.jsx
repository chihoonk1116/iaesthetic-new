import React from 'react'
import './price.scss'
import SecondaryHero from '../../components/secondary-hero/SecondaryHero'
import serviceHeroImage from '/assets/images/pricebg.jpg'
import PriceSection from '../../sections/priceSection/PriceSection'

const Price = () => {

  return (
    <div className='price-page'>
      <SecondaryHero 
        heroImage={serviceHeroImage} 
        title= {`Price`}
        subtitle = {`Personalized treatments with proven methods and modern innovation for results \n you’ll love.`}
      />
      <PriceSection/>
    </div>
  )
}

export default Price
