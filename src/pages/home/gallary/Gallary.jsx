import React, { useState, useEffect } from 'react';
import 'animate.css';

const Gallery = () => {
  const [animateIndex, setAnimateIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateIndex((prevIndex) => (prevIndex === 6 ? 1 : prevIndex + 1));
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div
              className={`w-1/2 p-1 md:p-2 animate__animated ${
                animateIndex === 1 ? 'animate__flipInX' : ''
              }`}
            >
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://img.freepik.com/free-psd/3d-rendering-wild-animal_23-2149962419.jpg"
              />
            </div>
            <div
              className={`w-1/2 p-1 md:p-2 animate__animated ${
                animateIndex === 2 ? 'animate__flipInY' : ''
              }`}
            >
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://img.freepik.com/free-psd/3d-rendering-wild-animal_23-2149962453.jpg"
              />
            </div>
            <div
              className={`w-full p-1 md:p-2 animate__animated ${
                animateIndex === 3 ? 'animate__zoomIn' : ''
              }`}
            >
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://img.freepik.com/free-psd/3d-rendering-wild-animal_23-2149962451.jpg"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div
              className={`w-full p-1 md:p-2 animate__animated ${
                animateIndex === 4 ? 'animate__fadeInLeft' : ''
              }`}
            >
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://img.freepik.com/free-psd/3d-rendering-wild-animal_23-2149962433.jpg"
              />
            </div>
            <div
              className={`w-1/2 p-1 md:p-2 animate__animated ${
                animateIndex === 5 ? 'animate__fadeInRight' : ''
              }`}
            >
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://img.freepik.com/free-psd/3d-rendering-wild-animal_23-2149962455.jpg"
              />
            </div>
            <div
              className={`w-1/2 p-1 md:p-2 animate__animated ${
                animateIndex === 6 ? 'animate__heartBeat' : ''
              }`}
            >
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://img.freepik.com/free-psd/3d-rendering-wild-animal_23-2149962439.jpg?t=st=1684342732~exp=1684343332~hmac=b0375971e42e513e01b92081b91b8a47332acee902f176f397eeebbde7abbee9"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
