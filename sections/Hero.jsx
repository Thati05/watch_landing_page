import React, { useState } from 'react';
import Buttons from "../components/Buttons";
import { statistics } from "../constants";
import { slides } from '../constants';
import { BsChevronCompactLeft } from 'react-icons/bs';
import { BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const preSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (isSlideInder) => {
    setCurrentIndex(isSlideInder);
  };


  return (
    <section id="home" className="w-full flex xl:flex-row max-container flex-col gap-10 justify-center min-h-screen">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start mt-20 w-full max-xl:padding-x max-xl:pt-40">
        <p className="font-poppins font-light text-lg">Our latest collection</p>
        <h1 className="mt-10 font-Libre_Calson_Display text-8xl max-sm:[72px] max-sm:leading-[82px]">
          <span className="xl:bg-transparent xl:whitespace-nowrap relative z-10 pr-10">Timeless</span>
          <br />
          <span className="text-text-blue inline-block mt-3">Elegance</span>
        </h1>
        <p className="font-poppins text-lg font-light mt-8 leading-8 sm:max-w-sm">Explore a world where time meets artistry. Nako offers a stunning collection of timepieces that blend exquisite design with precision engineering.</p>
        <Buttons label="Shop now" />
        <div className='flex justify-start items-start flex-wrap w-full mt-10 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-[30px] font-Libre_Calson_Display font-bold">{stat.value}</p>
              <p className="font-poppins text-[14px] font-light">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 relative flex max-xl:hidden items-center justify-center xl:min-h-screen max-xl:py-40 max-xl:mr-[100px] bg-primary bg-hero bg-cover h-[900px] ml-[65px] flex-col  group">

        <img
          className="w-[520px] h-[600px]   object-contain relative z-10 max-h-[800px] duration-500"
          alt="watch collection "
          src={slides[currentIndex].url}
        />

        <div className='hidden group-hover:block absolute top-[50%] -translate-x-[15px] translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/10 cursor-pointer'>
          <BsChevronCompactLeft onClick={preSlide}

            size={30} />
        </div>

        <div className='hidden group-hover:block absolute top-[50%] -translate-x-[-1px] translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/10 cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        <div className=' flex justify-center -translate-x-[75px] py-2'>
          {slides.map((slide, slideIndex) =>
          (
            <div key={slideIndex}
              onClick={() => goToSlide(slideIndex)}

              className='  text-4xl cursor-pointer text-text-blue'>
              <RxDotFilled />
            </div>
          )
          )}
        </div>
      </div>
    </section >
  );
};
{/*Since we are mapping over the images we have to give each one a key*/ }
export default Hero;
