import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
const StarRating = ({ rating, maxStars }) => {
  const stars = [];
  for (let i = 1; i <= maxStars; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} />);
    } else if (i - rating === 0.5) {
      stars.push(<FaStarHalfAlt key={i} />);
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }
  return <div>{stars}</div>;
};

export default StarRating;
