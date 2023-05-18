import React from 'react';
import Banner from '../banner/Banner';
import Gallary from '../gallary/gallary';
import ToysCategory from '../../toysCategory/toysCategory';





const Home = () => {
   
    return (
        
        <div>
          <Banner></Banner>
          <div>
            <h1 className='text-center font-extrabold text-5xl  text-rose-600 mt-20'>See Our Toys</h1>
          </div>
          <div className='px-12'>
          
          <Gallary></Gallary>
          </div>
          <ToysCategory></ToysCategory>
           
        </div>
    );
};

export default Home;