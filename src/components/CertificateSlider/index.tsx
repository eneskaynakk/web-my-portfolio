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
    <div className="container mx-auto mt-14 lg:mt-48 lg:mb-24 ">  
      <h1 className="text-3xl lg:text-6xl font-extrabold text-t-white text-center mb-10 tracking-tight leading-tight">
        My <span className=" text-t-gold">Certificates</span>
      </h1>
      
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