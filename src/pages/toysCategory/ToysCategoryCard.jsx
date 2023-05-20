import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ToysCategoryCard = ({ toy }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { name, pictureUrl, rating, price, description, _id } = toy;
  const [isHovered, setIsHovered] = useState(false);

  const hoverAnimationProps = useSpring({
    scale: isHovered ? 1.05 : 1,
    boxShadow: isHovered ? '0px 8px 20px rgba(0, 0, 0, 0.2)' : 'none',
  });

  const fadeAnimationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 200,
  });

  return (
    <animated.div
      className="card w-96 shadow-xl bg-gradient-to-t from-[rgb(146,218,255)] to-[rgb(146,218,255)]"
      style={hoverAnimationProps}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <figure className="px-10 pt-10">
        <animated.img src={pictureUrl} alt="Shoes" className="rounded-xl" style={fadeAnimationProps} />
      </figure>
      <div className="card-body items-center text-center">
        <animated.h2 className="card-title text-2xl" style={fadeAnimationProps}>
          {name}
        </animated.h2>
        <animated.p className="text-sm" style={fadeAnimationProps}>
          {description}
        </animated.p>
        <animated.div style={fadeAnimationProps}>
          <p>Price: ${price}</p>
          <div>
            <span className="mr-2">Rating:</span>
            {/* using react rating */}
            <Rating
              placeholderRating={rating}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-warning"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            />
          </div>
        </animated.div>
        <animated.div className="card-actions" style={fadeAnimationProps}>
          <Link to={`/toys/${_id}`}>
            <button className="btn bg-rose-600">View Details</button>
          </Link>
        </animated.div>
      </div>
    </animated.div>
  );
};

export default ToysCategoryCard;
