import React from 'react'
import './reviewCard.scss'
import { FaStar } from "react-icons/fa";

const ReviewCard = ({username, rates, comment, date}) => {

  return (
    <div className='review-card-container'>
      <div className="">
        <div className="stars">
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
        </div>
        <p>{date}</p>
      </div>
      <div className="">
        <p>
          {comment && comment.slice(0, 200) + '...'}
        </p>
      </div>
      <p className='username-tag'>by {username}</p>
    </div>
  )
}

export default ReviewCard
