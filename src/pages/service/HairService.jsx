import React from 'react'
import './service.scss'
import SecondaryHero from '../../components/secondary-hero/SecondaryHero'
import ServicesPageLayout from '../../layouts/servicesPageLayout/ServicesPageLayout'
import serviceHeroImage from '/assets/images/hairHero.jpg'
import { HairServices } from '../../constants'


const HairService = () => {
  return (
    <div className='hairservice-page'>
      <SecondaryHero 
        heroImage={serviceHeroImage} 
        title= {`Hair Loss Prevention & Hair Removal`}
        subtitle = {`Advanced care for confidence and stronger, healthier hair and effective care`}
      />
      <ServicesPageLayout 
        services={HairServices}
        navMenus={[
          {title: 'Hair Loss Prevention', pivot: 0, span: 1},
          {title: 'Hair Removal', pivot: 1, span: 2},
        ]}
      />
    </div>
  )
}

export default HairService
