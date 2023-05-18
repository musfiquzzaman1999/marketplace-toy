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
              <img className="mx-auto w-20" src="/logo.png" alt="Company Logo" />
              <p className="mt-4 text-white text-lg">ACME Industries Ltd.</p>
              <p className="text-gray-300 text-sm">Providing reliable tech since 1992</p>
            </div>
          </Fade>
          <Fade bottom delay={200}>
            <div>
              <h2 className="text-white font-bold">Services</h2>
              <ul className="mt-4">
                <li className="mt-2">
                  <a href="#" className="text-gray-300 hover:text-white transition duration-300">Branding</a>
                </li>
                <li className="mt-2">
                  <a href="#" className="text-gray-300 hover:text-white transition duration-300">Design</a>
                </li>
                <li className="mt-2">
                  <a href="#" className="text-gray-300 hover:text-white transition duration-300">Marketing</a>
                </li>
                <li className="mt-2">
                  <a href="#" className="text-gray-300 hover:text-white transition duration-300">Advertisement</a>
                </li>
              </ul>
            </div>
          </Fade>
          <Fade bottom delay={400}>
            <div>
              <h2 className="text-white font-bold">Follow Us</h2>
              <div className="flex mt-4">
                <a href="#" className="mr-4 text-gray-300 hover:text-white transition duration-300">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="mr-4 text-gray-300 hover:text-white transition duration-300">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </Fade>
        </div>
        <Fade bottom delay={600}>
          <div className="mt-8 text-center md:text-left">
            <p className="text-gray-300">ACME Industries Ltd. &copy; {new Date().getFullYear()}</p>
            <p className="text-gray-300">Terms of Use | Privacy Policy | Cookie Policy</p>
          </div>
        </Fade>
      </div>
    </footer>
  );
};

export default Footer;
