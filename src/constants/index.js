import european from '/assets/images/cleansing.jpg'
import acneRepair from '/assets/images/acnerepair.jpg'
import hydroImpact from '/assets/images/hydroimpact.jpg'
import exosome from '/assets/images/exosome.jpg'
import rejuran from '/assets/images/rejuran.webp'
import water from '/assets/images/water.jpg'
import vmax from '/assets/images/serviceHerobg.jpg'
import hairprevention from '/assets/images/hairprevention.jpg'
import hairremoval from '/assets/images/hairremoval.jpg'
import waxing from '/assets/images/waxing.jpg'
import eyebrow from '/assets/images/eyebrowser.jpg'
import lip from '/assets/images/lip.jpg'
import eyeline from '/assets/images/eyeline.jpg'
// promotion image
import exosomePromotion from '/assets/images/exosomepromotion.png'
import eyecreamPromotion from '/assets/images/poster.png'
import reviewPromotion from '/assets/images/reviewevent.png'

export const Faqs = [
  {
    title: 'Which skin types benefit most from the European Deep Facial Cleansing?',
    answer: 'The European Deep Facial Cleansing is particularly effective for individuals with oily and acne-prone skin. It thoroughly removes impurities and unclogs pores, leaving your complexion refreshed, smooth, and glowing.'
  },
  {
    title: 'How is the Water Therapy Deep Cleansing different from other deep cleansing treatments?',
    answer: 'This refreshing deep cleansing treatment uses a dedicated Water Therapy machine to effectively unclog pores and provide a thorough cleanse. A gentle peel may also be applied, depending on your skin type, to brighten your complexion, leaving you with a clean, glowing, and healthy look.'
  },
  {
    title: 'What technology is used in the Acne Repair Treatment, and is it painful?',
    answer: "The Acne Repair Treatment aims to balance your skin's pH and strengthen its protective barrier using a plasma skin device for recovery, sterilization, inflammation reduction, and accelerated healing. Depending on your skin type, a gentle peel may also be applied to address excess oil and clogged pores. The process is designed to minimize discomfort."
  },
  {
    title: 'Is there anything specific I need to do to prepare for a treatment?',
    answer: "Generally, there aren't any special preparations required. However, for certain treatments, there might be specific instructions. We'll provide detailed guidance when you book your appointment, or you can feel free to ask us before your visit."
  },
  {
    title: 'Can I resume my daily activities immediately after a treatment?',
    answer: "Most of our treatments are designed to allow you to return to your daily activities immediately afterward. If there are any specific post-treatment precautions for a particular service, we will inform you beforehand."
  },
  {
    title: 'How long does each treatment typically take?',
    answer: "The exact duration of each treatment can vary depending on your skin condition and personalized needs. We will provide a more precise estimate during your consultation."
  },
  {
    title: 'How does the Hydroimpact Treatment benefit my skin?',
    answer: "The Hydroimpact Treatment utilizes hydrogen-rich water to penetrate deep into your skin cells. This helps to clear out free radicals, boost antioxidant defenses, slow down signs of aging, soothe inflammation, and address various skin concerns, resulting in a glowing and refreshed complexion."
  },
  {
    title: "I'm not sure which treatment is best for my skin. How can I choose?",
    answer: "We offer professional consultations to help recommend the most suitable treatment for your specific skin type and concerns. We encourage you to schedule a consultation so we can assess your needs and guide you."
  },

]

export const facialservices = [
  {
    subTitle: 'Signature Facial',
    title: 'European Deep Facial Cleansing',
    imgSrc : european,
    description: 'A professional deep-cleansing facial that combines exfoliation, steam, and gentle extractions to clear congested pores and remove impurities. Ideal for oily or acne-prone skin, this treatment helps refine skin texture, balance sebum, and restore a clear, radiant complexion.',
    points: ['Deep Pore Cleansing', 'Skin Balance', 'Radiant Results']
  },
  {
    subTitle: 'Signature Facial',
    title: 'Hydroimpact Treatment',
    imgSrc : hydroImpact,
    description: 'A professional skin-rejuvenation therapy that infuses hydrogen-rich water deep into the skin to neutralize free radicals and strengthen antioxidant defenses. This treatment helps slow visible signs of aging, soothe inflammation, and restore a radiant, refreshed complexion.',
    points: [
      'Cellular Protection : Hydrogen penetrates at the mitochondrial level to combat oxidative stress.', 
      'Anti-Aging Benefits : Helps slow visible signs of aging while soothing inflammation. ', 
      'Revitalized Skin : Leaves the complexion refreshed, luminous, and deeply renewed.'
    ],
    machines: [
      {name: 'Hydroimpact', refUrl : ''}
    ]
  },
  {
    subTitle: 'Signature Facial',
    title: 'Acne Repair Treatment',
    imgSrc : acneRepair,
    description: 'A targeted facial designed to balance skin pH, strengthen the barrier, and reduce acne-causing bacteria with plasma technology. Combined with a gentle peel to regulate oil and unclog pores, this treatment calms inflammation, accelerates healing, and promotes a clear, healthy complexion.',
    points: [
      'Skin Healing : Balances pH and strengthens the skin barrier for improved resilience.', 
      'Plasma Therapy : Reduces bacteria, inflammation, and accelerates healing of breakouts.', 
      'Clearer Complexion : Gentle peel to regulate oil, unclog pores, and prevent future acne.'
    ],
    machines: [
      {name: 'Plasma', refUrl : ''},
      {name: 'As needed', refUrl : ''}
    ]
  },
  {
    subTitle: 'Signature Facial',
    title: 'Water Therapy Deep Cleansing',
    imgSrc : water,
    description: 'A revitalizing deep-cleansing treatment that uses Water Therapy technology to effectively remove impurities and unclog pores. Enhanced with a gentle peel, this facial brightens and refines skin texture, leaving the complexion fresh, smooth, and radiant.',
    points: [
      'Deep Purification : Water Therapy device unclogs pores and removes impurities.', 
      'Customized Renewal : Gentle peel application brightens and refines skin texture.', 
      'Healthy Glow : Promotes a fresh, radiant complexion that feels clean and balanced.'
    ],
    machines: [
      {name: 'Water Therapy', refUrl : ''},
    ]
  },
  {
    subTitle: 'Anti-agaging & Lifting',
    title: 'V-MAX Lifting & Rejuvenation Treatment',
    imgSrc : vmax,
    description: 'An advanced non-invasive lifting treatment that uses ultrasound technology to stimulate collagen and elastin production. Ideal for improving skin elasticity and firmness, this therapy helps contour facial features, reduce signs of aging, and promote long-lasting rejuvenation.',
    points: [
      'Non-Invasive Lifting : Uses advanced ultrasound technology to stimulate collagen and elastin.', 
      'Firm & Youthful : Improves skin elasticity and contours for a lifted, rejuvenated look.', 
      'Long-Lasting Results : Promotes deep tissue regeneration for smoother, firmer skin.'],
    machines: [
      {name: 'V-MAX', refUrl : ''},
    ]
  },
  {
    subTitle: 'Anti-agaging & Lifting',
    title: 'Rejuran',
    imgSrc : rejuran,
    description: "An advanced regenerative skin booster that injects salmon-derived polynucleotides (PN) to stimulate cellular repair and collagen synthesis. This treatment enhances elasticity, reduces fine lines, improves skin texture and pore size, and delivers deep hydration for a glowing, resilient complexion. Often regarded as Korea's signature 'skin healer', it promotes healing from within with minimal downtime.",
    points: [
      'Cell-level regeneration – Activates fibroblast-driven collagen and elastin rebuilding', 
      "Hydrating & tightening – Deep moisture retention and minimized pores", 
      'Targeted formulas – Variants available for overall rejuvenation, deep scars, hydration, and eye area',
    ],
    machines: [
      {name: 'Microneedling', refUrl : ''},
      {name: 'Curazet', refUrl : ''},
    ]
  },
  {
    subTitle: 'Anti-agaging & Lifting',
    title: 'Exosome',
    imgSrc : exosome,
    description: 'A cutting-edge regenerative treatment using extracellular vesicles—tiny lipid-bound messengers packed with growth factors, proteins, lipids, and RNA—to enhance intercellular communication and drive skin healing. Widely adopted in Korean clinics, exosome therapy accelerates repair post-laser or microneedling, reduces inflammation, boosts collagen synthesis, and improves tone and texture.',
    points: [
      'Cellular communication – Directs skin repair and rejuvenation', 
      'Faster recovery – Speeds healing and reduces redness after procedures', 
      'Clinically proven – Trusted in professional Korean clinics and available in advanced at-home formulations'
    ],
    machines: [
      {name: 'Microneedling', refUrl : ''},
      {name: 'Curazet', refUrl : ''},
    ]
  }
]

export const HairServices = [
  {
    subTitle: 'Hair Loss Prevention',
    title: 'DS Scalp Care',
    imgSrc : hairprevention,
    description: 'A cutting-edge regenerative treatment using extracellular vesicles—tiny lipid-bound messengers packed with growth factors, proteins, lipids, and RNA—to enhance intercellular communication and drive skin healing. Widely adopted in Korean clinics, exosome therapy accelerates repair post-laser or microneedling, reduces inflammation, boosts collagen synthesis, and improves tone and texture.',
    points: [
      'Cellular communication – Directs skin repair and rejuvenation', 
      'Faster recovery – Speeds healing and reduces redness after procedures', 
      'Clinically proven – Trusted in professional Korean clinics and available in advanced at-home formulations'
    ],
    machines: [
        {name: 'Microneedling', refUrl : ''},
      ]
    },
  {
    subTitle: 'Hair Removal',
    title: 'Waxing',
    imgSrc : waxing,
    description: 'A cutting-edge regenerative treatment using extracellular vesicles—tiny lipid-bound messengers packed with growth factors, proteins, lipids, and RNA—to enhance intercellular communication and drive skin healing. Widely adopted in Korean clinics, exosome therapy accelerates repair post-laser or microneedling, reduces inflammation, boosts collagen synthesis, and improves tone and texture.',
    points: [
      'Cellular communication – Directs skin repair and rejuvenation', 
      'Faster recovery – Speeds healing and reduces redness after procedures', 
      'Clinically proven – Trusted in professional Korean clinics and available in advanced at-home formulations'
    ]
  },
  {
    subTitle: 'Hair Removal',
    title: 'Aton Laser Waxing',
    imgSrc : hairremoval,
    description: 'A cutting-edge regenerative treatment using extracellular vesicles—tiny lipid-bound messengers packed with growth factors, proteins, lipids, and RNA—to enhance intercellular communication and drive skin healing. Widely adopted in Korean clinics, exosome therapy accelerates repair post-laser or microneedling, reduces inflammation, boosts collagen synthesis, and improves tone and texture.',
    points: [
      'Cellular communication – Directs skin repair and rejuvenation', 
      'Faster recovery – Speeds healing and reduces redness after procedures', 
      'Clinically proven – Trusted in professional Korean clinics and available in advanced at-home formulations'
    ]
  },
]

export const PermanentMakeupServices = [
  {
    subTitle: 'Semi Permanent Makeup',
    title: 'Eyebrow',
    imgSrc : eyebrow,
    description: 'A cutting-edge regenerative treatment using extracellular vesicles—tiny lipid-bound messengers packed with growth factors, proteins, lipids, and RNA—to enhance intercellular communication and drive skin healing. Widely adopted in Korean clinics, exosome therapy accelerates repair post-laser or microneedling, reduces inflammation, boosts collagen synthesis, and improves tone and texture.',
    points: [
      'Cellular communication – Directs skin repair and rejuvenation', 
      'Faster recovery – Speeds healing and reduces redness after procedures', 
      'Clinically proven – Trusted in professional Korean clinics and available in advanced at-home formulations'
    ]
  },
  {
    subTitle: 'Semi Permanent Makeup',
    title: 'Eyeline',
    imgSrc : eyeline,
    description: 'A cutting-edge regenerative treatment using extracellular vesicles—tiny lipid-bound messengers packed with growth factors, proteins, lipids, and RNA—to enhance intercellular communication and drive skin healing. Widely adopted in Korean clinics, exosome therapy accelerates repair post-laser or microneedling, reduces inflammation, boosts collagen synthesis, and improves tone and texture.',
    points: [
      'Cellular communication – Directs skin repair and rejuvenation', 
      'Faster recovery – Speeds healing and reduces redness after procedures', 
      'Clinically proven – Trusted in professional Korean clinics and available in advanced at-home formulations'
    ]
  },
  {
    subTitle: 'Semi Permanent Makeup',
    title: 'Libline',
    imgSrc : lip,
    description: 'A cutting-edge regenerative treatment using extracellular vesicles—tiny lipid-bound messengers packed with growth factors, proteins, lipids, and RNA—to enhance intercellular communication and drive skin healing. Widely adopted in Korean clinics, exosome therapy accelerates repair post-laser or microneedling, reduces inflammation, boosts collagen synthesis, and improves tone and texture.',
    points: [
      'Cellular communication – Directs skin repair and rejuvenation', 
      'Faster recovery – Speeds healing and reduces redness after procedures', 
      'Clinically proven – Trusted in professional Korean clinics and available in advanced at-home formulations'
    ]
  },
]

export const prices = [
  {
    title:'facial',
    content: [
      {serviceName: 'EUROPEAN DEEP FACIAL CLEANSING', price: '$70'},
      {serviceName: 'Hydroimpact Treatment', price: '$70'},
      {serviceName: 'Acne Repair Treatment', price: '$70'},
      {serviceName: 'Water Therapy Deep Cleansing', price: '$70'},
      {serviceName: 'V-MAX Lifting', price: '$70'},
      {serviceName: 'Rejuran', price: '$70'},
      {serviceName: 'Exosome', price: '$70'},
    ]
  },
  {
    title:'Hair Loss Prevention & Hair Removal',
    content: [
      {serviceName: 'DS scalp care', price: 'From $70 ~'},
      {serviceName: 'Aton Laser Waxing', price: 'From $70 ~'},
      {serviceName: 'Waxing', price: 'From $70 ~'},
    ]
  },
  {
    title:'Permanent Makeup',
    content: [
      {serviceName: 'Eyebrow', price: 'From $70 ~'},
      {serviceName: 'Eyeline', price: 'From $70 ~'},
      {serviceName: 'Libline', price: 'From $70 ~'},
    ]
  },
]

export const promotions = [
  {
    title: 'Review Event',
    description: 'How did you like our service? Get a SUNCREAM when you show us your support with your review and photos on Google!',
    imageSrc: reviewPromotion,
    status: 'current'
  },
  {
    title: 'Lifting up with Exosome',
    description: 'Powered by high-purity exosomes, this treatment regenerates skin, boosts firmness, and brightens tone — delivering complete care in a single ampoule.',
    imageSrc: exosomePromotion,
    status: 'current'
  },
  {
    title: 'New Eyecream Promotion',
    description: 'Chosen by millions, this next-generation eye cream lifts 8 facial zones, smooths deep wrinkles, and delivers complete anti-aging care — all in one.',
    imageSrc: eyecreamPromotion,
    status: 'end'
  },
]