import React, { useContext } from 'react';

import { useLoaderData, useParams } from 'react-router-dom';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

const ToysDetails = () => {
  const toyData = useLoaderData();
  const { name, pictureUrl, rating, price, description, _id, sellerEmail, sellerName, quantityAvailable } = toyData;

  return (
    <div className='mt-16 mb-16 p-10'>
      <div className='card lg:card-side bg-base-100 shadow-xl hover:scale-105 hover:shadow-2xl transition-all'>
        <figure>
          <img src={pictureUrl} alt='Album' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title text-2xl font-semibold'>{name}</h2>
          <p>{description}</p>
          <p className='text-xl font-semibold'>Seller Name: {sellerName}</p>
          <p>Seller Email: {sellerEmail}</p>
          <p>Quantity: {quantityAvailable}</p>
          <p>Price: {price}</p>

          <div className='rating'>
            <span className='mr-2'>Rating:</span>
            <Rating
              placeholderRating={rating}
              readonly
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar className='text-warning' />}
              fullSymbol={<FaStar />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToysDetails;
