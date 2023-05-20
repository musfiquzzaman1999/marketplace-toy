import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="about-section  py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2" data-aos="fade-right">
            <div className="p-8 md:ml-12 lg:ml-12 ml-4">
              <h2 className="text-5xl font-bold mb-4 md:mt-72 lg:mt-72 mt-8 ">About Us</h2>
              <p className="text-gray-700">
              At Safari Squad, we prioritize quality and safety. Our toys are made from durable and child-friendly materials, ensuring they can withstand countless hours of play. We also offer a wide selection of eco-friendly and sustainably sourced options, promoting responsible consumption and environmental awareness.
              </p>
              <p className="text-gray-700 mt-4">
              We are committed to providing exceptional customer service and strive to make your shopping experience with us as enjoyable as possible. Our team is dedicated to helping you find the perfect animal toy for yourself, your child, or as a thoughtful gift. We offer convenient online ordering, secure payment options, and efficient shipping to ensure your Safari Squad experience is seamless.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2" data-aos="fade-left">
            <div className="p-8">
              <img src="https://img.freepik.com/free-photo/rag-doll-red-with-arms-two_1156-237.jpg?w=740&t=st=1684587200~exp=1684587800~hmac=817e7f5e2a9c37f045ce06e66c4574694bd533bee8dcf8ae3717f23c228da05e" alt="About Us" className="w-full h-auto rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
