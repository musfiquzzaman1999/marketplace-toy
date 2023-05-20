import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

const ToyCard = ({ toy }) => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS library
  }, []);

  return (
    <motion.div
      className="card w-96 glass"
      data-aos="fade-up"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <figure>
        <motion.img
          src={toy.pictureUrl}
          alt={toy.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toy.name}</h2>
        <p>{toy.description}</p>
        <div className='rating '>
            <span className='mr-2 text-xl font-bold'>Rating:</span>
            <Rating className='mt-1'
              placeholderRating={toy.rating}
              readonly
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar className='text-warning' />}
              fullSymbol={<FaStar />}
            />
          </div>
      </div>
      
    </motion.div>
  );
};

export default ToyCard;
