"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { useWindowSize } from '@/hooks/useWindowSize'; 

import Image from 'next/image';
import InsiderImage from 'public/images/insiderQa.png'
import TechTestImage from 'public/images/techTest.png'
import UdemyTestImage from 'public/images/udemySoftwareTest.jpg'
import TechSeleniumImage from 'public/images/techSelenium.png'
import UdemyPostmanImage from 'public/images/udemyPostman.jpg'
import TechApiImage from 'public/images/techApi.png'

import './certificateSlider.css';


function CertificateSlider() {

  const windowWidth = useWindowSize();
  const isMobile = windowWidth !== null && windowWidth < 720;

  return (
    <div className="lg:container lg:mx-auto mt-14 lg:mt-24 lg:mb-24 ">

      <div className="flex items-center justify-center gap-2">

        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-certificate w-6 h-6 lg:w-10 lg:h-10">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
          <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
          <path d="M6 9l12 0" />
          <path d="M6 12l3 0" />
          <path d="M6 15l2 0" />
        </svg>

        <h1 className="certificate text-2xl lg:text-4xl font-extrabold text-t-white text-center tracking-tight leading-tight">
          My <span className=" text-t-gold">Certificates</span>
        </h1>
      </div>
      <div className="mx-auto border-b-4 sm:border-b-8 border-t-gold w-56 lg:w-82 mb-10 lg:mb-16 mt-1"></div>
      
      {isMobile 
      ?
      <Swiper
        slidesPerView="auto"
        loop={true}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="certificateSwiper"
      >
        <SwiperSlide >
          <div>
            <Image
              src={InsiderImage}
              alt="Insider Certificate"
              className='select-none rounded-lg w-160 h-100'
            />
          </div>
        </SwiperSlide>

        <SwiperSlide >
          <div>
            <Image
              src={TechTestImage}
              alt="Techcarrer.net Test Certificate"
              className='select-none rounded-lg w-160 h-100'
            />
          </div>
        </SwiperSlide>

        <SwiperSlide >
          <div>
            <Image
              src={UdemyTestImage}
              alt="Udemy Test Certificate"
              className='select-none rounded-lg w-160 h-100'
            />
          </div>
        </SwiperSlide>

        <SwiperSlide >
          <div>
            <Image
              src={TechSeleniumImage}
              alt="Techcarrer.net Selenium Certificate"
              className='select-none rounded-lg w-160 h-100'
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <Image
              src={UdemyPostmanImage}
              alt="Udemy Postman Certificate"
              className='select-none rounded-lg w-160 h-100'
            />
          </div>
        </SwiperSlide>

        <SwiperSlide >
          <div>
            <Image
              src={TechApiImage}
              alt="Techcarrer.net API Certificate"
              className='select-none rounded-lg w-160 h-100'
            />
          </div>
        </SwiperSlide>
        
      </Swiper>

      :
      
      <Swiper
        slidesPerView="auto"
        loop={true}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="certificateSwiper"
      >
        <SwiperSlide className='!flex gap-20'>
          <div>
            <Image
              src={InsiderImage}
              alt="Insider Certificate"
              className='select-none rounded-lg w-160 h-100'
            />
          </div>

          <div>
            <Image
              src={TechTestImage}
              alt="Techcarrer.net Test Certificate"
              className='select-none rounded-lg w-160 h-100'
            />
          </div>

          <div>
            <Image
              src={UdemyTestImage}
              alt="Udemy Test Certificate"
              className='select-none rounded-lg w-160 h-100'
            />
          </div>
          
        </SwiperSlide>
        <SwiperSlide className='!flex gap-20'>
          <div>
            <Image
              src={TechSeleniumImage}
              alt="Techcarrer.net Selenium Certificate"
              className='select-none rounded-lg w-160 h-100'
            />
          </div>

          <div>
            <Image
              src={UdemyPostmanImage}
              alt="Udemy Postman Certificate"
              className='select-none rounded-lg w-160 h-100'
            />
          </div>

          <div>
            <Image
              src={TechApiImage}
              alt="Techcarrer.net API Certificate"
              className='select-none rounded-lg w-160 h-100'
            />
          </div>
        </SwiperSlide>
        
        
      </Swiper>
      }
  </div>
  )
}

export default CertificateSlider;