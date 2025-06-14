"use client";
import Image from 'next/image';
import { useState, useEffect} from 'react';

export default function Home() {

    const images = [
        '/images/slideImage.jpg',
        '/images/subImage.jpg'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000);

        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
      <main>
          <div className='relative w-full h-[700px]'>
              {images.map((src, index) => (
                  <Image
                      key={src}
                      src={src}
                      alt={`Slider Image ${index + 1}`}
                      fill
                      className={`object-cover transition-opacity duration-1000 ease-in-out ${
                          index === currentIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                      sizes="100vw"
                      priority={index === 0}
                  />
              ))}
              <div className='absolute inset-0 bg-black opacity-50'></div>
              <div className='absolute text-4xl flex flex-col justify-center items-center w-full top-[600px]'>
                  <h4 className='text-white text-center'>Welcome to the portfolio site developed by Software Quality Assurance Engineer</h4>
              </div>
          </div>
      </main>
    );
}
