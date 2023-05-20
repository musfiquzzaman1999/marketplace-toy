import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section
        className="relative bg-[url(https://img.freepik.com/free-psd/3d-renndering-mexico-icon-design_23-2149742509.jpg?t=st=1684343828~exp=1684344428~hmac=4533d2b92899fab934af787c874c61a3af350e458873f4ee8b66c29db10e2f48)] bg-cover bg-center bg-no-repeat"
        data-aos="fade"
      >
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
            Welcome to Safari Squad{' '}
              <strong className="block font-extrabold text-rose-700">
              Where Imagination Roams Wild!
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-black font-semibold">
            your ultimate destination for animal toys and accessories! At Safari Squad, we are passionate about bringing the wonders of the animal kingdom into the hands of children and animal enthusiasts alike.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center md:ml-16 lg:ml-16">
              <a
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
