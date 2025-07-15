"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

import Hamburger from 'hamburger-react';

import { useWindowSize } from '@/hooks/useWindowSize';

const Header = () => {

    const [isOpenMenu, setOpenMenu] = useState(false);

    const [isOpenSearch, setOpenSearch] = useState(false);
    
    const pathname = usePathname();

    const windowWidth = useWindowSize();
    const isMobile = windowWidth !== null && windowWidth < 720;
    
    const scrollToElement = (elementClass: string) =>{
        const element = document.querySelector(elementClass) as HTMLElement;
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function toResearch(elementClass: string){
        const element = document.querySelector(elementClass) as HTMLElement;
        element.focus();
    }
    
    return (
        
        <header className="bg-b-black overflow-x-hidden absolute w-full z-50">
            <nav className="fixed w-full z-50 bg-gradient-to-b from-b-black/90 to-transparent backdrop-blur-md">
                <div className='px-8 py-4 lg:px-0 lg:py-0 lg:container lg:mx-auto'>
                    
                    {isMobile 
                    ?
                    <div className="flex justify-between items-center">
                        <Link href="/">
                            <Image src="/images/siteIcon.png" alt="Site Icon" width={100} height={100} priority/>
                        </Link>

                        <div className='flex justify-between gap-2 items-center'>
                            <button onClick={() => setOpenSearch(true)} className="cursor-pointer text-[#f5f5f5]">
                                <svg className="h-5 w-5 mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </button>

                            <Hamburger size={20} color='#d4af37' toggled={isOpenMenu} toggle={setOpenMenu}/>
                        </div>

                        {isOpenSearch && (
                            <div className="fixed top-0 left-0 h-68 rounded-b-lg w-screen p-4 bg-black flex flex-col">
                                <div className='flex justify-between items-center gap-4'>

                                    <div className='relative flex items-center w-full max-w-[800px]'>
                                        <input className="searchInput w-full rounded-lg border border-gray-300 bg-white py-2 pl-12 pr-4 leading-5 placeholder-gray-500 focus:border-[#d4af37] focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#d4af37]" placeholder="Search" type="text" name='searchBox' id='1'/>

                                        <button onClick={() => toResearch(".searchInput")} className="absolute left-3 cursor-pointer text-[#d4af37]">
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                            </svg>
                                        </button>
                                    </div>

                                    <button onClick={() => setOpenSearch(false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                                    </button>

                                </div>

                                <div className="flex flex-col gap-4 pl-2 pt-10 rounded-lg overflow-y-auto flex-grow">
                                    <Link href="/resume" onClick={() => setOpenSearch(false)} className="flex gap-2 items-center text-t-white font-text text-lg focus:bg-t-gold transition-colors duration-200 ease-in-out rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text-icon lucide-file-text">
                                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                                            <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                                            <path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>
                                        </svg>

                                        Resume

                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-up-right-icon lucide-move-up-right">
                                            <path d="M13 5H19V11"/>
                                            <path d="M19 5L5 19"/>
                                        </svg>
                                    </Link>

                                    <button onClick={() => {scrollToElement(".project"); setOpenSearch(false);}} className="flex gap-2 items-center text-t-white font-text text-lg focus:bg-t-gold transition-colors duration-200 ease-in-out rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text-icon lucide-file-text">
                                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                                            <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                                            <path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>
                                        </svg>

                                        Projects

                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-up-right-icon lucide-move-up-right">
                                            <path d="M13 5H19V11"/>
                                            <path d="M19 5L5 19"/>
                                        </svg>
                                    </button>

                                    <button onClick={() => {scrollToElement(".certificateSwiper"); setOpenSearch(false);}} className="flex gap-2 items-center text-t-white font-text text-lg focus:bg-t-gold transition-colors duration-200 ease-in-out rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text-icon lucide-file-text">
                                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                                            <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                                            <path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>
                                        </svg>

                                        Certificates

                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-up-right-icon lucide-move-up-right">
                                            <path d="M13 5H19V11"/>
                                            <path d="M19 5L5 19"/>
                                        </svg>
                                    </button>

                                    <button onClick={() => setOpenSearch(false)} className="flex gap-2 items-center text-t-white font-text text-lg focus:bg-t-gold transition-colors duration-200 ease-in-out rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text-icon lucide-file-text">
                                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                                            <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                                            <path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>
                                        </svg>

                                        Contact

                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-up-right-icon lucide-move-up-right">
                                            <path d="M13 5H19V11"/>
                                            <path d="M19 5L5 19"/>
                                        </svg>
                                    </button>
                                    
                                    
                                </div>
                                
                            </div>
                        )}

                        

                        {isOpenMenu && (
                            <div className="fixed top-0 left-0 h-screen w-screen p-4 bg-black flex flex-col">
                            
                                <div className='flex justify-between mb-4'>
                                    <Link href="/" onClick={() => setOpenMenu(false)}>
                                        <Image src="/images/siteIcon.png" alt="Site Icon" width={100} height={100} priority/>
                                    </Link>
                                    <Hamburger size={20} color='#d4af37' toggled={isOpenMenu} toggle={setOpenMenu}/>
                                </div>

                                <div className="flex flex-col gap-2 p-8 bg-b-light-black/50 backdrop-blur-sm rounded-lg overflow-y-auto flex-grow">
                                    <Link href="/resume" onClick={() => setOpenMenu(false)} className="flex justify-between items-center text-t-white font-text text-xl py-3 focus:bg-t-gold transition-colors duration-200 ease-in-out rounded-lg">
                                        Resume

                                        <svg fill="none" height="24" width="24" className='rotate-270' shapeRendering="geometricPrecision" stroke="#d4af37" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </Link>
                                    <div className="border-b border-t-gold"></div>
                                    
                                    <details className="group border-b border-t-gold">
                                        <summary className="flex items-center justify-between py-3 group-open:bg-t-gold rounded-lg transform duration-300 ease-in-out">
                                            <span className='text-t-white font-text text-xl'>
                                                Projects
                                            </span>
                                            
                                            <span className="transition rotate-270 group-open:rotate-360">
                                                <svg fill="none" height="24" width="24" className='group-open:stroke-t-white' shapeRendering="geometricPrecision" stroke="#d4af37" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                                    <path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </summary>
                                        

                                        <div className='flex flex-col gap-4 mt-2 mb-2'>
                                            <button onClick={() => {scrollToElement(".projectDetail"); setOpenMenu(false);}} className="w-full font-text text-t-white text-lg py-2 pl-6 focus:bg-t-gold transition-colors duration-200 ease-in-out text-left rounded-lg">Amazon Test Automation</button>

                                            <button onClick={() => {scrollToElement(".projectDetail"); setOpenMenu(false);}} className="w-full font-text text-t-white text-lg py-2 pl-6 focus:bg-t-gold transition-colors duration-200 ease-in-out text-left rounded-lg">Trendyol Test Automation</button>

                                            <button onClick={() => {scrollToElement(".projectDetail"); setOpenMenu(false);}} className="w-full font-text text-t-white text-lg py-2 pl-6 focus:bg-t-gold transition-colors duration-200 ease-in-out text-left rounded-lg">Instagram Test Automation</button>

                                            <button onClick={() => {scrollToElement(".projectDetail"); setOpenMenu(false);}} className="w-full font-text text-t-white text-lg py-2 pl-6 focus:bg-t-gold transition-colors duration-200 ease-in-out text-left rounded-lg">X Test Automation</button>

                                            <button onClick={() => {scrollToElement(".projectDetail"); setOpenMenu(false);}} className="w-full font-text text-t-white text-lg py-2 pl-6 focus:bg-t-gold transition-colors duration-200 ease-in-out text-left rounded-lg">Web Movie Site</button>

                                            <button onClick={() => {scrollToElement(".projectDetail"); setOpenMenu(false);}} className="w-full font-text text-t-white text-lg py-2 pl-6 focus:bg-t-gold transition-colors duration-200 ease-in-out text-left rounded-lg">Personal Portfolio Website</button>
                                        </div>

                                    </details>

                                    <button onClick={() => {scrollToElement(".certificateSwiper"); setOpenMenu(false);}} className="flex justify-between items-center text-t-white font-text text-xl py-3 focus:bg-t-gold transition-colors duration-200 ease-in-out text-left rounded-lg">
                                        Certificates
                                        
                                        <svg fill="none" height="24" width="24" className='rotate-270' shapeRendering="geometricPrecision" stroke="#d4af37" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </button>
                                    <div className="border-b border-t-gold"></div>

                                    <Link href="/" onClick={() => setOpenMenu(false)} className="flex justify-between items-center text-t-white font-text text-xl py-3 focus:bg-t-gold transition-colors duration-200 ease-in-out text-left rounded-lg">
                                        Contact

                                        <svg fill="none" height="24" width="24" className='rotate-270' shapeRendering="geometricPrecision" stroke="#d4af37" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </Link>
                                    <div className="border-b border-t-gold"></div>
                                </div>

                            </div>
                        )}
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
