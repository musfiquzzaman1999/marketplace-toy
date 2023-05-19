import React, { useContext, useEffect, useState } from 'react';
import ToysCategoryCard from './ToysCategoryCard';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContex } from '../provider/AuthProvider';


const ToysCategory = () => {
  const { toys } = useContext(AuthContex);
  const [selectedCategory, setSelectedCategory] = useState(() => {
    // Retrieve the selected category from localStorage or set it as an empty string
    const storedCategory = localStorage.getItem('selectedCategory');
    return storedCategory ? storedCategory : '';
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Extract unique sub-categories from toy data
    const uniqueCategories = [...new Set(toys.map(toy => toy.subCategory.trim().toLowerCase()))];
    setCategories(uniqueCategories);
  }, [toys]);

  useEffect(() => {
    // Store the selected category in localStorage when it changes
    localStorage.setItem('selectedCategory', selectedCategory);
  }, [selectedCategory]);

  // Add "All" as an option in categories
  const allCategories = ['All', ...categories];

  // Filter toys based on selected category
  const filteredToys = selectedCategory && selectedCategory !== 'All'
    ? toys.filter(toy => toy.subCategory.trim().toLowerCase() === selectedCategory.toLowerCase())
    : toys;

  // Handle category selection
  const handleCategoryChange = (index) => {
    setSelectedCategory(allCategories[index]);
  };

  return (
    <div>
      <h2 className='text-center font-bold text-5xl text-rose-600 mt-16'  data-aos="fade">Toy's Collections</h2>

      {/* Category filter */}
      <div className='text-center font-semibold text-xl text-black mt-6 mb-16'>
        <Tabs selectedIndex={allCategories.indexOf(selectedCategory)} onSelect={handleCategoryChange}>
          <TabList>
            {allCategories.map(category => (
              <Tab key={category}>{category}</Tab>
            ))}
          </TabList>

          <div className='ml-8'>
            {allCategories.map(category => (
              <TabPanel key={category}>
                <div className='grid grid-cols-3 gap-5 px-12 ml-10 mb-16'>
                  {filteredToys.map(toy => (
                    <ToysCategoryCard key={toy._id} toy={toy} />
                  ))}
                </div>
              </TabPanel>
            ))}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default ToysCategory;
