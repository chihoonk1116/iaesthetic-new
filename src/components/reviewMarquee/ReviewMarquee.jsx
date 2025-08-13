import React, { useState } from 'react'
import './reviewMarquee.scss'
import ReviewCard from '../reviewCard/ReviewCard'

const ReviewMarquee = ({animation, reviews}) => {

  const [isHover, setIsHover] = useState(false)

  console.log(reviews)

  function getDates(reviewDate){
    const date = new Date(reviewDate)

    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();

    const formattedDate = `${month}.${day}.${year}`;

    return formattedDate
  }

  return (
    <div 
      className='marquee-container'
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <div 
          key={i}
          className="marquee-content"  
          style={{
            animation: animation,
            animationPlayState: isHover ? 'paused' : 'running'
          }}
        >
          {reviews.map((review, ind) => (
            <ReviewCard 
              key={ind}
              username={review.reviewer.displayName}
              rates={review.starRating}
              comment={review.comment}
              date={getDates(review.updateTime)}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default ReviewMarquee
