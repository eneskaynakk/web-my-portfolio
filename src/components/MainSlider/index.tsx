"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image'
import './mainSlider.css'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const MainSlider = () => {

    return (
        <div className='relative w-full h-[700px]'>
            <Swiper slidesPerView={1} loop={true} autoplay={{delay: 5000,disableOnInteraction: false,}}
            modules={[Autoplay]} className="mainSlider">

                <SwiperSlide>
                    <Image src="/images/slideImage.jpg" alt= "Main Image" fill className="object-cover" priority sizes="100vw"/>

                    <div className='absolute inset-0 bg-black opacity-50'></div>
                    <div className='absolute text-4xl flex flex-col justify-center items-center w-full top-[600px]'>
                        <h4 className='cursor-default text-white text-center'>Welcome to the portfolio site developed by Software Quality Assurance Engineer</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <Image src="/images/subImage.jpg" alt= "Main Image" fill className="object-cover" priority sizes="100vw"/>
                    
                    <div className='absolute inset-0 bg-black opacity-50'></div>
                    <div className='absolute text-4xl flex flex-col justify-center items-center w-full top-[600px]'>
                        <h4 className='cursor-default text-white text-center'>Welcome to the portfolio site developed by Software Quality Assurance Engineer</h4>
                    </div>
                </SwiperSlide>
                
            </Swiper>
          </div>
    )
}

export default MainSlider;