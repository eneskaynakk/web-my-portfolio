"use client";

import Typewriter from 'typewriter-effect';
import { useEffect, useState } from 'react';

import { useWindowSize } from '@/hooks/useWindowSize'; 

import Link from 'next/link';
import Image from 'next/image';

import './heroSection.css';

const HeroSection = () => {

    const [certificateCount, setCertificateCount] = useState(0);
    const [projectCount, setProjectCount] = useState(0);
    const [trainingHours, setTrainingHours] = useState(0);

    useEffect(() => {
        if (certificateCount < 5) {

        const timerCertificate = setTimeout(() => {
            setCertificateCount(certificateCount+1);
        }, 100);
        
        return () => clearTimeout(timerCertificate);
        }
    }, [certificateCount]);


    useEffect(() => {
        if (projectCount < 5) {

        const timerProject = setTimeout(() => {
            setProjectCount(projectCount+1);
        }, 100);
        
        return () => clearTimeout(timerProject);
        }
    }, [projectCount]);


    useEffect(() => {
        if (trainingHours < 100) {

        const timerTraining = setTimeout(() => {
            setTrainingHours(trainingHours+20);
        }, 100);
        
        return () => clearTimeout(timerTraining);
        }
    }, [trainingHours]);

    const windowWidth = useWindowSize();
    const isMobile = windowWidth !== null && windowWidth < 720;

    return (
        <section className="relative min-h-154 lg:min-h-screen overflow-hidden flex items-center justify-center">
           {isMobile
           ?
           <div>
            <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-b-black/70 via-b-black/60 to-b-black/90 z-10"></div>
                    <Image src="/images/macImage.jpg" alt= "Main Image" fill className='object-cover select-none' priority sizes='100vw'/>
                </div>
                <div className='flex z-10 px-4'>
                    <div className="flex flex-col gap-8 relative justify-center items-center">

                        <div className='flex gap-3'>
                            <h1 className="font-topic-title text-xl text-t-white">
                                Hello, My Name Is <span className="font-topic-title text-t-gold">Enes KAYNAK</span>
                            </h1>
                        </div>
                        
                        <div className='flex gap-2 typewriter text-xl font-topic-title text-t-white'>
                            I{"'"}m
                            <Typewriter options={{
                                strings: ["QA Engineer." ,"Software Test Engineer.", "QA Tester."],
                                loop: true,
                                autoStart: true,
                                delay: 100,
                                deleteSpeed: 1
                            }}/>
                        </div>

                        <div className="flex gap-2">
                            <Link href="/" className="bg-t-gold text-white px-6 py-2 rounded-md relative overflow-hidden group">
                                <span className="relative z-10 text-base font-text text-t-white">Hire Me</span>
                            </Link>

                            <Link href="https://github.com/eneskaynakk" className="bg-t-gold text-white px-6 py-2 rounded-md relative overflow-hidden group">
                                <span className="relative z-10 text-base font-text text-t-white">Latest Projects</span>
                            </Link>

                            
                        </div>

                        <div className="flex justify-center items-center text-center gap-4">
                            <div className="flex flex-col gap-1">
                                <p className="text-2xl text-t-gold font-text">{certificateCount}+</p>
                                <p className="text-base text-t-white font-text">Certificate Received</p>
                            </div>

                            <div className="flex flex-col gap-1">
                                <p className="text-2xl text-t-gold font-text">{projectCount}+</p>
                                <p className="text-base text-t-white font-text">Projects Completed</p>
                            </div>

                            <div className="flex flex-col gap-1">
                                <p className="text-2xl text-t-gold font-text">{trainingHours}+</p>
                                <p className="text-base text-t-white font-text">Training Hours</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            :
            <div>
                <div className="absolute inset-0 z-0 ">
                    <div className="absolute inset-0 bg-gradient-to-b from-b-black/70 via-b-black/60 to-b-black/90 z-10"></div>
                    <Image src="/images/macImage.jpg" alt= "Main Image" fill className='object-cover select-none' priority sizes='100vw'/>
                </div>
                <div className='flex z-10 container mx-auto'>
                    <div className="flex flex-col gap-8 relative container mx-auto justify-center items-center">

                        <div className='flex gap-3'>
                            <h1 className="font-topic-title text-6xl text-t-white">
                                Hello, My Name Is <span className="font-topic-title text-t-gold">Enes KAYNAK</span>
                            </h1>
                        </div>
                        
                        <div className='flex gap-4 typewriter text-6xl font-topic-title text-t-white'>
                            I{"'"}m
                            <Typewriter options={{
                                strings: ["QA Engineer." ,"Software Test Engineer.", "QA Tester."],
                                loop: true,
                                autoStart: true,
                                delay: 100,
                                deleteSpeed: 1
                            }}/>
                        </div>

                        <div className="flex gap-2">
                            <Link href="/" className="bg-t-gold text-white px-6 py-2 rounded-md relative overflow-hidden group">
                                <span className="absolute top-0 left-0 w-full h-full bg-white opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition duration-500"></span>
                                <span className="relative z-10 font-text text-t-white">Hire Me</span>
                            </Link>
                            <Link href="https://github.com/eneskaynakk" className="relative text-t-white px-6 py-2 rounded-md overflow-hidden group">
                                <div className="absolute inset-0 bg-t-gold transform -translate-x-full group-hover:translate-x-0 transition duration-300"></div>
                                <span className="relative z-10 font-medium font-text group-hover:text-t-white">Latest Projects</span>
                            </Link>
                        </div>

                        <div className="flex items-center gap-12">
                            <div className="flex flex-col gap-1">
                                <h4 className="text-3xl text-t-gold">{certificateCount}+</h4>
                                <p className="text-base text-t-white font-text">Certificate Received</p>
                            </div>

                            <div className="flex flex-col gap-1">
                                <h4 className="text-3xl text-t-gold">{projectCount}+</h4>
                                <p className="text-base text-t-white font-text">Projects Completed</p>
                            </div>

                            <div className="flex flex-col gap-1">
                                <h4 className="text-3xl text-t-gold">{trainingHours}+</h4>
                                <p className="text-base text-t-white font-text">Training Hours</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </section>
    )
}

export default HeroSection;