import React from 'react'
import './reviewCard.scss'
import { FaStar } from "react-icons/fa";

const ReviewCard = ({username, rates, comment, date}) => {

  return (
    <div className='review-card-container'>
      <div className="review-card-top">
        <div className="stars">
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
        </div>
        <p>{date}</p>
      </div>
      <div className="review-card-bottom">
        <p>
          {comment && comment.slice(0, 200) + '...'}
        </p>
        <p className='username-tag'>by {username}</p>
      </div>
    </div>
  )
}

export default ReviewCard
