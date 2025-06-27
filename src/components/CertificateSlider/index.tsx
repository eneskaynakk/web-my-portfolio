"use client"
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import './certificateSlider.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function CertificateSlider() {

  return (
    <div className="container mx-auto mt-24">
      <div className='mb-10'>
        <h3 className='text-center text-green-600 text-3xl'>Certificates</h3>
      </div>

      <Swiper slidesPerView="auto" loop={true} spaceBetween={30} navigation={true} modules={[Navigation]} className="certificateSwiper">

        <SwiperSlide className='!w-auto flex justify-center items-center '>
         
          <div className="relative w-120 h-100">
            <Image
              src="/images/insiderQa.png"
              alt="Insider Certificate"
              fill
              className='object-cover rounded-xl'
              priority
              sizes='50vw'
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className='!w-auto flex justify-center items-center'>
          <div className="relative w-120 h-100">
            <Image
              src="/images/techTest.png"
              alt="Techcareer.net Test Certificate" 
              fill
              className='object-cover rounded-xl'
              priority
              sizes='50vw'
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className='!w-auto flex justify-center items-center'>
          <div className="relative w-120 h-100">
            <Image
              src="/images/udemySoftwareTest.jpg"
              alt="Udemy Software Test Certificate"
              fill
              className='object-cover rounded-xl'
              priority
              sizes='50vw'
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className='!w-auto flex justify-center items-center'>
          <div className="relative w-120 h-100">
            <Image
              src="/images/udemyPostman.jpg"
              alt="Udemy Postman Certificate"
              fill
              className='object-cover rounded-xl'
              sizes='50vw'
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className='!w-auto flex justify-center items-center'>
          <div className="relative w-120 h-100">
            <Image
              src="/images/techApi.png"
              alt="Techcareer.net API Certificate" 
              fill
              className='object-cover rounded-xl'
              sizes='50vw'
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className='!w-auto flex justify-center items-center'>
          <div className="relative w-120 h-100">
            <Image
              src="/images/techSelenium.png"
              alt="Techcareer.net Selenium Certificate"
              fill
              className='object-cover rounded-xl'
              sizes='50vw'
            />
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default CertificateSlider;