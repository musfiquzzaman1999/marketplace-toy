import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ToysCategoryCard = ({toy}) => {
    console.log(toy)

    const {name,pictureUrl,rating,price,description,_id} =toy;
    const [isHovered, setIsHovered] = useState(false);

  const hoverAnimationProps = useSpring({
    scale: isHovered ? 1.05 : 1,
    boxShadow: isHovered ? '0px 8px 20px rgba(0, 0, 0, 0.2)' : 'none',
  });
  return (
    <div>
         <animated.div
      className="card w-96 shadow-xl bg-gradient-to-t from-[rgb(146,218,255)] to-[rgb(146,218,255)] " 
      style={hoverAnimationProps}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <figure className="px-10 pt-10">
        <img src={pictureUrl} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl">{name}</h2>
        <p className='text-sm'>{description}</p>
        <div>
            <p>Price:${price}</p>
            <div>
      
      <span className=' mr-2'>Rating:</span>
      {/* using react rating */}
      <Rating
  placeholderRating={rating}
  readonly
  emptySymbol={<FaRegStar></FaRegStar>}
  placeholderSymbol={<FaStar className='text-warning'></FaStar>}
  fullSymbol={<FaStar></FaStar>}
/>
    </div>
        </div>
        <div className="card-actions">
         <Link to={`/toys/${_id}`}> <button className="btn bg-rose-600">Buy Now</button></Link>
        </div>
      </div>
    </animated.div>
    </div>
  );
};

export default ToysCategoryCard;
