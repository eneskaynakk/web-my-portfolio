"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

import { useWindowSize } from '@/hooks/useWindowSize'; 


const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const pathname = usePathname();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToElement = (elementClass: string) =>{
        const element = document.querySelector(elementClass) as HTMLElement;
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function toResearch(elementClass: string){
        const element = document.querySelector(elementClass) as HTMLElement;
        element.focus();
    }

    const windowWidth = useWindowSize();
    const isMobile = windowWidth !== null && windowWidth < 1024;
    
    if (windowWidth === null) return null;
    
    return (

        <header className="bg-b-black overflow-x-hidden absolute w-full z-50">
            <nav className="fixed w-full z-50 bg-gradient-to-b from-b-black/90 to-transparent backdrop-blur-md">
                <div className='px-4 py-4 lg:px-0 lg:py-0 lg:container lg:mx-auto'>
                    
                    {isMobile 
                    ?
                    <div className="flex justify-between items-center">
                        
                        <Link href="/">
                            <Image src="/images/siteIcon.png" alt="Site Icon" width={100} height={100} priority/>
                        </Link>

                         <div className='relative flex items-center'>
                            <input className="searchInputMobile w-full rounded-full border border-gray-300 bg-white py-3 pl-12 pr-4 leading-5 placeholder-gray-500 focus:border-[#d4af37] focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#d4af37]" placeholder="Search" type="text" name='searchBox' id='1'/>
                            <button onClick={() => toResearch(".searchInputMobile")} className="absolute left-3 cursor-pointer text-[#d4af37]">
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </button>
                        </div>

                        <div className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ease-in-out ${ isOpen ? "opacity-75" : "opacity-0 pointer-events-none" }`} onClick={toggleMenu}>
                        </div>

                        <div className={`fixed top-0 right-0 z-50 pt-32 pl-8 flex h-screen w-full flex-col bg-gradient-to-b from-b-black to-b-light-black text-2xl transition-transform duration-300 ease-in-out ${ isOpen ? "translate-x-0" : "translate-x-full" }`}>
                            <div className="flex flex-col gap-2">
                                
                                <Link href="/resume" onClick= {toggleMenu} className="text-t-white font-text text-xl py-3 focus:bg-t-gold transition-colors duration-200 ease-in-out">
                                    Resume
                                </Link> 
                                
                                <details className="group">

                                    <summary className="flex items-center py-3 group-open:bg-t-gold transform duration-300 ease-in-out">
                                        <span className='text-t-white font-text text-xl'>Projects</span>
                                        <span className="transition rotate-270 group-open:rotate-360">
                                                <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" >
                                                    <path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                        </span>
                                    </summary>

                                    <div className='flex flex-col gap-4 mt-2 mb-2'>
                                        <button onClick={() => {scrollToElement(".project"); toggleMenu();}} className="w-full font-text text-t-white text-lg py-2 pl-3 focus:bg-t-gold transition-colors duration-200 ease-in-out text-left">Amazon Test Automation</button>
                                        <button onClick={() => {scrollToElement(".project"); toggleMenu();}} className="w-full font-text text-t-white text-lg py-2 pl-3 focus:bg-t-gold transition-colors duration-200 ease-in-out text-left">Trendyol Test Automation</button>
                                        <button onClick={() => {scrollToElement(".project"); toggleMenu();}} className="w-full font-text text-t-white text-lg py-2 pl-3 focus:bg-t-gold transition-colors duration-200 ease-in-out text-left">Instagram Test Automation</button>
                                        <button onClick={() => {scrollToElement(".project"); toggleMenu();}} className="w-full font-text text-t-white text-lg py-2 pl-3 focus:bg-t-gold transition-colors duration-200 ease-in-out text-left">X Test Automation</button>
                                        <button onClick={() => {scrollToElement(".project"); toggleMenu();}} className="w-full font-text text-t-white text-lg py-2 pl-3 focus:bg-t-gold transition-colors duration-200 ease-in-out text-left">Web Movie Site</button>
                                        <button onClick={() => {scrollToElement(".project"); toggleMenu();}} className="w-full font-text text-t-white text-lg py-2 pl-3 focus:bg-t-gold transition-colors duration-200 ease-in-out text-left">Personal Portfolio Website</button>
                                    </div>
                                    
                                </details>

                                <button onClick={() => {scrollToElement(".certificateSwiper"); toggleMenu();}} className="text-t-white font-text text-xl py-3 focus:bg-t-gold transition-colors duration-200 ease-in-out text-left" >
                                    Certificates
                                </button>
                            
                                <Link href="/" className="text-t-white font-text text-xl py-3 focus:bg-t-gold transition-colors duration-200 ease-in-out text-left" onClick={toggleMenu}>
                                    Contact
                                </Link>
                            
                            </div>
                            <div className="absolute w-full right-0 bottom-0 border-t border-t-white pt-8 pb-8 flex flex-col">
                                <p className="text-center text-t-white text-lg mb-4">
                                    © 2025 Enes Kaynak. All rights reserved.
                                </p>
                            </div>
                        </div>

                        <nav className="rounded-lg px-2 bg-t-gold flex justify-end">
                            <div className="relative h-8 w-6 cursor-pointer z-50" onClick={toggleMenu}>
                                
                                <span className={`absolute left-1/2 h-1 w-full -translate-x-1/2 rounded-full bg-t-white transition-all duration-300 ease-in-out ${ isOpen? "top-1/2 -translate-y-1/2 rotate-45 !bg-white" : "top-1/4 -translate-y-1/2"}`}>
                                </span>

                                <span className={`absolute left-1/2 top-1/2 h-1 w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-t-white transition-all duration-300 ease-in-out ${ isOpen? "opacity-0" : "" }`}>
                                </span>

                                <span className={`absolute left-1/2 h-1 w-full -translate-x-1/2 rounded-full bg-t-white transition-all duration-300 ease-in-out ${ isOpen? "top-1/2 -translate-y-1/2 -rotate-45 !bg-white" : "top-3/4 -translate-y-1/2" }`}>
                                </span>
                            </div>
                        </nav>
                    </div>

                    :

                    <div className="flex justify-between items-center py-6">
                        
                        <Link href="/">
                            <Image src="/images/siteIcon.png" alt= "Site Icon" width={100} height={100} priority/>
                        </Link>
                        
                        <Link href="/resume" className={`${pathname === "/resume"? "text-t-gold hover:text-t-gold font-header-text transition-colors duration-300 text-sm uppercase tracking-widest" : "text-t-white hover:text-t-gold font-header-text transition-colors duration-300 text-sm uppercase tracking-widest" } `} >
                            Resume
                        </Link>

                        <div className="group relative">
                            <div>
                                <button onClick={() => scrollToElement(".project")} className="flex text-t-white group-hover:text-t-gold font-header-text transition-colors duration-300 text-sm uppercase tracking-widest cursor-pointer">
                                    Projects
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down transform rotate-270 group-hover:rotate-360 transition-transform duration-300">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </button>
                            </div>

                            <div className="flex invisible absolute -left-[100px] z-50 rounded-md shadow-xl group-hover:visible ">
                                <div className="flex flex-col text-center">
                                    <button onClick={() => scrollToElement(".projectDetail")} className="text-t-white hover:text-t-gold hover:bg-dark-gray font-header-text transition-colors duration-300 text-sm tracking-widest m-2 p-2 rounded-md w-40 cursor-pointer">
                                        Amazon Test Automation
                                    </button>

                                    <button onClick={() => scrollToElement(".projectDetail")} className="text-t-white hover:text-t-gold hover:bg-dark-gray font-header-text transition-colors duration-300 text-sm tracking-widest m-2 p-2 rounded-md w-40 cursor-pointer">
                                        Trendyol Test Automation
                                    </button>

                                    <button onClick={() => scrollToElement(".projectDetail")} className="text-t-white hover:text-t-gold hover:bg-dark-gray font-header-text transition-colors duration-300 text-sm tracking-widest m-2 p-2 rounded-md w-40 cursor-pointer">
                                        Web Movie Site
                                    </button>
                                </div>

                                <div className="flex flex-col text-center">
                                    <button onClick={() => scrollToElement(".projectDetail")} className="text-t-white hover:text-t-gold hover:bg-dark-gray font-header-text transition-colors duration-300 text-sm tracking-widest m-2 p-2 rounded-md w-40 cursor-pointer">
                                        Instagram Test Automation
                                    </button>

                                    <button onClick={() => scrollToElement(".projectDetail")} className="text-t-white hover:text-t-gold hover:bg-dark-gray font-header-text transition-colors duration-300 text-sm tracking-widest m-2 p-2 rounded-md w-40 cursor-pointer">
                                        X Test Automation
                                    </button>

                                    <button onClick={() => scrollToElement(".projectDetail")} className="text-t-white hover:text-t-gold hover:bg-dark-gray font-header-text transition-colors duration-300 text-sm tracking-widest m-2 p-2 rounded-md w-40 cursor-pointer">
                                        Personal Portfolio Website
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button onClick={() => scrollToElement(".certificateSwiper")}  className="text-t-white hover:text-t-gold font-header-text transition-colors duration-300 text-sm uppercase tracking-widest cursor-pointer">
                                Certificates
                            </button>
                        </div>

                        <div className='relative flex items-center w-full max-w-[800px]'>
                            <input className="searchInput w-full rounded-full border border-gray-300 bg-white py-3 pl-12 pr-4 leading-5 placeholder-gray-500 focus:border-[#d4af37] focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#d4af37] sm:text-md" placeholder="Search" type="text" name='searchBox' id='1'/>
                            <button onClick={() => toResearch(".searchInput")} className="absolute left-3 cursor-pointer text-[#d4af37]">
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </button>
                        </div>

                        <button className="px-3 py-2 bg-transparent border border-t-gold text-t-gold hover:bg-t-gold hover:text-t-white transition-all duration-300 uppercase tracking-widest font-header-text text-sm cursor-pointer">
                            Contact Us
                        </button>
                        
                    </div>
                    }
                    
                </div>
            </nav>
        </header>
        
    )
}

export default Header;
