import React, { useEffect, useState } from 'react'
import './loadingSpinner.scss'

const LoadingSpinner = ({active}) => {

  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (active) {
      setIsActive(true)
    } else {
      const timer = setTimeout(() => setIsActive(false), 800)
      return () => clearTimeout(timer)
    }
  }, [active])

  return (
    <div className={`loading-spinner ${isActive ? "active" : ""}`}>
      <div className="gradient-wrapper">
        <div className="content-wrapper">
          <div className="img-wrapper">
            <img src="/assets/images/logo.png" alt="" />
          </div>
          <p>{active ? 'Please Wait...' : 'Welcome to I-Aesthetic'}</p>
        </div>
      </div>
    </div>
  )
}

export default LoadingSpinner
