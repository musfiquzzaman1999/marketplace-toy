import React from 'react';
import { Fade } from 'react-reveal';
import Wave from 'react-wavify';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-[rgb(68,106,125)] to-[rgb(15,105,150)]">
      <Wave fill="url(#footerGradient)" className="wave" options={{ amplitude: 20, speed: 0.2, points: 3 }}>
        <defs>
          <linearGradient id="footerGradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#5B21B6" />
          </linearGradient>
        </defs>
      </Wave>
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Fade bottom>
            <div className="text-center md:text-left">
              <img className="mx-auto w-20" src="/logo.png" alt="Company Logo" data-aos="fade" />
              <p className="mt-4 text-white text-lg" data-aos="fade">ACME Industries Ltd.</p>
              <p className="text-gray-300 text-sm" data-aos="fade">Providing reliable tech since 1992</p>
            </div>
          </Fade>
          <Fade bottom delay={200}>
            <div>
              <h2 className="text-white font-bold" data-aos="fade">Services</h2>
              <ul className="mt-4">
                <li className="mt-2">
                  <a href="#" className="text-gray-300 hover:text-white transition duration-300" data-aos="fade">Branding</a>
                </li>
                <li className="mt-2">
                  <a href="#" className="text-gray-300 hover:text-white transition duration-300"  data-aos="fade">Design</a>
                </li>
                <li className="mt-2">
                  <a href="#" className="text-gray-300 hover:text-white transition duration-300"  data-aos="fade">Marketing</a>
                </li>
                <li className="mt-2">
                  <a href="#" className="text-gray-300 hover:text-white transition duration-300"  data-aos="fade">Advertisement</a>
                </li>
              </ul>
            </div>
          </Fade>
          <Fade bottom delay={400}>
            <div>
              <h2 className="text-white font-bold"  data-aos="fade">Follow Us</h2>
              <div className="flex mt-4">
                <a href="#" className="mr-4 text-gray-300 hover:text-white transition duration-300"  data-aos="fade">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="mr-4 text-gray-300 hover:text-white transition duration-300"  data-aos="fade">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition duration-300"  data-aos="fade">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </Fade>
        </div>
        <Fade bottom delay={600}>
          <div className="mt-8 text-center md:text-left" >
            <p className="text-gray-300"  data-aos="fade">ACME Industries Ltd. &copy; {new Date().getFullYear()}</p>
            <p className="text-gray-300"  data-aos="fade">Terms of Use | Privacy Policy | Cookie Policy</p>
          </div>
        </Fade>
      </div>
    </footer>
  );
};

export default Footer;
