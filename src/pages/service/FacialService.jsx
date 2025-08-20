import React from 'react'
import './service.scss'
import SecondaryHero from '../../components/secondary-hero/SecondaryHero'
import ServicesPageLayout from '../../layouts/servicesPageLayout/ServicesPageLayout'
import serviceHeroImage from '/assets/images/serviceHerobg.jpg'
import { facialservices } from '../../constants'

const FacialService = () => {
  return (
    <>
      <SecondaryHero 
        heroImage={serviceHeroImage} 
        title= {`Signature Facials & Anti-aging`}
        subtitle = {`Trusted experts enhancing your skin’s health and beauty`}
      />
      <ServicesPageLayout 
        services={facialservices}
        navMenus={[
          {title: 'Signature Facial', pivot: 0, span: 4},
          {title: 'Face Lifting & Anti-aging', pivot: 4, span: 3}
        ]}
      />
    </>
  )
}

export default FacialService
