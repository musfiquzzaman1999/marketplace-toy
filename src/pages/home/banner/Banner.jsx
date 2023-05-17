import React from 'react';

const Banner = () => {
    return (
        <div>
            <section
  class="relative bg-[url(https://img.freepik.com/free-psd/3d-renndering-mexico-icon-design_23-2149742509.jpg?t=st=1684343828~exp=1684344428~hmac=4533d2b92899fab934af787c874c61a3af350e458873f4ee8b66c29db10e2f48)] bg-cover bg-center bg-no-repeat "
>
  <div
    class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 class="text-3xl font-extrabold sm:text-5xl">
        Let us find your

        <strong class="block font-extrabold text-rose-700">
          Forever Home.
        </strong>
      </h1>

      <p class="mt-4 max-w-lg sm:text-xl/relaxed text-zinc-950  ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>

      <div class="mt-8 flex flex-wrap gap-4 text-center md:ml-16 lg:ml-16">
        <a
          href="#"
          class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
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