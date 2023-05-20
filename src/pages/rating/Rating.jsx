import React, { useEffect, useState } from 'react';
import ToysCard from './ToysCard';

const Rating= () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch('https://toy-marketplace-server-neon.vercel.app/toys')
      .then(response => response.json())
      .then(data => {
        // Sort toys based on rating in descending order
        const sortedToys = data.sort((a, b) => b.rating - a.rating);
        // Slice the top 3 toys with highest ratings
        const topRatedToys = sortedToys.slice(0, 3);
        setToys(topRatedToys);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
        <h1 className='text-center text-4xl font-bold text-rose-600'>Top 3 Highet Rating Toys</h1>
        <div className="grid md:grid-cols-3 lg:grid-cols-3 md:gap-5 lg:gap-5 gap-2 md:px-16 lg:px-16 p-0 md:ml-8 lg:ml-8 ml-4 mt-20 mb-20">
      {toys.map(toy => (
        <ToysCard key={toy.id} toy={toy} />
      ))}
    </div>
    </div>
  );
};

export default Rating;
