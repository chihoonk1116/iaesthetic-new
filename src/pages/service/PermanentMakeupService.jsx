import React from 'react'
import './service.scss'
import SecondaryHero from '../../components/secondary-hero/SecondaryHero'
import ServicesPageLayout from '../../layouts/servicesPageLayout/ServicesPageLayout'
import serviceHeroImage from '/assets/images/permanentHero.jpg'

import { PermanentMakeupServices } from '../../constants'


const PermanentMakeupService = () => {
  return (
    <div className='makeupservice-page'>
      <SecondaryHero 
        heroImage={serviceHeroImage} 
        title= {`Permanent Makeup`}
        subtitle = {`Precision artistry for natural, lasting beauty`}
      />
      <ServicesPageLayout 
        services={PermanentMakeupServices}
        navMenus={[
          {title: 'Permanent Makeup', pivot: 0, span: 1},
        ]}
      />
    </div>
  )
}

export default PermanentMakeupService
