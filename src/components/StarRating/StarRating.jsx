import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import "./starRating.css"

function StarRating({object, rating, setRating}) {
  const [hover, setHover] = useState(null)
  return (
    <div>
      {Object.keys(object).map(ratingValue => (
        <label key={ratingValue}>
          <FaStar
          size={40}
          className="star"
          onClick={() => setRating(ratingValue)}
          color={ratingValue <=(hover ||rating)? '#ffc107' : '#e4e5e9'}
          onMouseEnter={()=> setHover(ratingValue)}
          onMouseLeave={() => setHover(null)}
          />

          <input type="radio" name='rating' value={ object[ratingValue]}/>
        </label>
      ))}
        
    </div>
  )
}

export default StarRating