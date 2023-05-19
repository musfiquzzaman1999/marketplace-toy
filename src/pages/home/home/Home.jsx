import React, { useEffect } from 'react';
import Banner from '../banner/Banner';
import Gallary from '../gallary/gallary';
import ToysCategory from '../../toysCategory/toysCategory';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useTitle from '../../../hooks/useTitle';


const Home = () => {
  useTitle('Safari Squad')
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div>
      <Banner></Banner>
      <div>
        <h1
          className="text-center font-extrabold text-5xl text-rose-600 mt-20"
          data-aos="fade"
        >
          See Toy's Gallary
        </h1>
      </div>
      <div className="px-12">
        <Gallary></Gallary>
      </div>
      <ToysCategory></ToysCategory>
    </div>
  );
};

export default Home;
