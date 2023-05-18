import React, { useContext, useEffect, useState } from 'react';

import ToysCategoryCard from './ToysCategoryCard';
import { AuthContex } from '../provider/AuthProvider';

const ToysCategory = () => {
  const { toys } = useContext(AuthContex);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Extract unique sub-categories from toy data
    const uniqueCategories = [...new Set(toys.map(toy => toy.subCategory))];
    setCategories(uniqueCategories);
  }, [toys]);

  // Filter toys based on selected category
  const filteredToys = selectedCategory ? toys.filter(toy => toy.subCategory === selectedCategory) : toys;

  // Handle category selection
  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <h2 className='text-center font-bold text-5xl text-rose-600 mt-16'>Animal Toys</h2>

      {/* Category filter */}
      <div className='text-center font-semibold text-xl text-black mt-6 mb-16'>
        <label htmlFor="categoryFilter">Filter by Category:</label>
        <select
          id="categoryFilter"
          className='ml-8 border-double border-4 border-rose-600'
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Toy list */}
      <div>
        {filteredToys.map(toy => (
          <ToysCategoryCard key={toy._id} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default ToysCategory;
