import React, { useEffect } from 'react';
import Banner from '../banner/Banner';
import Gallary from '../gallary/gallary';
import ToysCategory from '../../toysCategory/toysCategory';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useTitle from '../../../hooks/useTitle';
import AboutUs from '../../aboutus/AboutUs';
import Rating from '../../rating/Rating';


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
          className="text-center font-extrabold md:text-5xl lg:text-5xl text-3xl text-rose-600 md:mt-20 lg:mt-20 mt-8"
          data-aos="fade"
        >
          See Toy's Gallary
        </h1>
      </div>
      <div className="px-12">
        <Gallary></Gallary>
      </div>
      <ToysCategory></ToysCategory>
      <AboutUs></AboutUs>
      <Rating></Rating>
    </div>
  );
};

export default Home;
