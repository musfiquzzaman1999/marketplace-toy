import React from 'react';
import Banner from '../banner/Banner';
import Gallary from '../gallary/gallary';





const Home = () => {
   
    return (
        
        <div>
          <Banner></Banner>
          <div>
            <h1 className='text-center font-extrabold text-5xl  text-rose-600 mt-20'>see our toys</h1>
          </div>
          <div className='px-12'>
          
          <Gallary></Gallary>
          </div>
           
        </div>
    );
};

export default Home;