"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import Hamburger from 'hamburger-react';

import { useWindowSize } from '@/hooks/useWindowSize';

const Header = () => {

    const [isOpenMenu, setOpenMenu] = useState(false);

    const [searchTerm, setSearchTerm] = useState('');
    const items = [
        { label: 'Resume', action: () => router.push('/resume') },
        { label: 'Amazon Test Automation', action: () => scrollToElement("amazon-test-automation") },
        { label: 'Trendyol Test Automation', action: () => scrollToElement("trendyol-test-automation") },
        { label: 'Instagram Mobile Test Automation', action: () => scrollToElement("instagram-mobile-test-automation") },
        { label: 'X Test Automation', action: () => scrollToElement("x-test-automation") },
        { label: 'Web Movie Site', action: () => scrollToElement("web-movie-site") },
        { label: 'Personal Portfolio Website', action: () => scrollToElement("personal-portfolio-website") },
        { label: 'Certificates', action: () => scrollToElement("certificate") },
        { label: 'Contact', action: () => scrollToElement("contact") },
    ];
    const filteredItems = items.filter(item =>
        item.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const pathname = usePathname();

    const router = useRouter();

    const windowWidth = useWindowSize();
    const isMobile = windowWidth !== null && windowWidth < 1024;
    
    const scrollToElement = (elementId: string) =>{
        router.push('/#' + elementId );
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
                        
                        <Hamburger size={20} color='#d4af37' toggled={isOpenMenu} toggle={setOpenMenu}/>

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
                                            <button onClick={() => {scrollToElement("amazon-test-automation"); setOpenMenu(false);}} className="w-full font-text text-t-white text-lg py-2 pl-6 focus:bg-t-gold transition-colors duration-200 ease-in-out text-left rounded-lg">Amazon Test Automation</button>

                                            <button onClick={() => {scrollToElement("trendyol-test-automation"); setOpenMenu(false);}} className="w-full font-text text-t-white text-lg py-2 pl-6 focus:bg-t-gold transition-colors duration-200 ease-in-out text-left rounded-lg">Trendyol Test Automation</button>

                                            <button onClick={() => {scrollToElement("instagram-mobile-test-automation"); setOpenMenu(false);}} className="w-full font-text text-t-white text-lg py-2 pl-6 focus:bg-t-gold transition-colors duration-200 ease-in-out text-left rounded-lg">Instagram Test Automation</button>

                                            <button onClick={() => {scrollToElement("x-test-automation"); setOpenMenu(false);}} className="w-full font-text text-t-white text-lg py-2 pl-6 focus:bg-t-gold transition-colors duration-200 ease-in-out text-left rounded-lg">X Test Automation</button>

                                            <button onClick={() => {scrollToElement("web-movie-site"); setOpenMenu(false);}} className="w-full font-text text-t-white text-lg py-2 pl-6 focus:bg-t-gold transition-colors duration-200 ease-in-out text-left rounded-lg">Web Movie Site</button>

                                            <button onClick={() => {scrollToElement("personal-portfolio-website"); setOpenMenu(false);}} className="w-full font-text text-t-white text-lg py-2 pl-6 focus:bg-t-gold transition-colors duration-200 ease-in-out text-left rounded-lg">Personal Portfolio Website</button>
                                        </div>

                                    </details>

                                    <button onClick={() => {scrollToElement("certificate"); setOpenMenu(false);}} className="flex justify-between items-center text-t-white font-text text-xl py-3 focus:bg-t-gold transition-colors duration-200 ease-in-out text-left rounded-lg">
                                        Certificates
                                        
                                        <svg fill="none" height="24" width="24" className='rotate-270' shapeRendering="geometricPrecision" stroke="#d4af37" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </button>
                                    <div className="border-b border-t-gold"></div>

                                    <div className='flex flex-col gap-4 pt-5'>
                                        <div className="flex items-center w-72 gap-3 rounded-3xl shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-4 hover:shadow-2xl">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-phone-icon lucide-phone w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>
                                                </svg>
                                            </div>
                                            <p className="text-base font-text text-t-gold">Phone:</p>
                                            <p className="text-base font-text text-t-white">+90 552 212 24 43</p>
                                        </div>

                                        <div className="flex items-center w-72 gap-3 rounded-3xl shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-4 hover:shadow-2xl">
                                        <div>
                                            <svg aria-hidden="true" className="icon w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="location">
                                                <path
                                                d="M78.75 28.7656C78.75 21.1407 75.721 13.828 70.3293 8.4363C64.9376 3.04463 57.625 0.015625 50 0.015625C42.375 0.015625 35.0623 3.04463 29.6707 8.4363C24.279 13.828 21.25 21.1407 21.25 28.7656C21.25 44.6406 50 84.7812 50 84.7812C50 84.7812 78.75 44.6406 78.75 28.7656ZM31.25 28.7656C31.25 25.0572 32.3497 21.4321 34.4099 18.3487C36.4702 15.2653 39.3986 12.862 42.8247 11.4429C46.2508 10.0237 50.0208 9.65243 53.6579 10.3759C57.2951 11.0994 60.636 12.8851 63.2583 15.5074C65.8805 18.1296 67.6663 21.4705 68.3897 25.1077C69.1132 28.7448 68.7419 32.5148 67.3227 35.9409C65.9036 39.3671 63.5004 42.2954 60.4169 44.3557C57.3335 46.416 53.7084 47.5156 50 47.5156C45.0272 47.5156 40.2581 45.5402 36.7417 42.0239C33.2254 38.5076 31.25 33.7384 31.25 28.7656Z"
                                                fill="#d4af37"></path>
                                                <path
                                                d="M64.4687 67.1875C62.3125 70.7031 60.2188 73.9531 58.375 76.7344C66.1875 77.7969 71.6563 80.2969 71.6563 83.2344C71.6563 87.1094 61.9688 90.2656 50 90.2656C38.0313 90.2656 28.3437 87.1406 28.3437 83.2344C28.3437 80.2812 33.8438 77.7812 41.6406 76.7344C39.7969 73.9531 37.7031 70.6875 35.5469 67.1719C16.6406 69.3125 2.98438 75.6562 2.98438 83.1719C2.98438 92.4687 24.0312 100 50 100C75.9688 100 97.0156 92.4687 97.0156 83.1719C97.0156 75.6562 83.3594 69.3125 64.4687 67.1875Z"
                                                fill="#d4af37"></path>
                                            </svg>
                                        </div>
                                        <p className="text-base font-text text-t-gold">Location:</p>
                                        <p className="text-base font-text text-t-white">Istanbul, Türkiye</p>
                                        </div>

                                        <div className="flex items-center w-72 gap-3 rounded-3xl shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-4 hover:shadow-2xl">
                                        <div>
                                            <svg aria-hidden="true" className="icon w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="email">
                                                <path
                                                d="M83.2187 83.125H16.2812C12.7601 83.1209 9.38438 81.7203 6.89456 79.2304C4.40473 76.7406 3.00414 73.3649 3 69.8437V29.7812C3.00414 26.2601 4.40473 22.8844 6.89456 20.3946C9.38438 17.9047 12.7601 16.5041 16.2812 16.5H83.2187C86.7399 16.5041 90.1156 17.9047 92.6055 20.3946C95.0953 22.8844 96.4959 26.2601 96.5 29.7812V69.8437C96.4959 73.3649 95.0953 76.7406 92.6055 79.2304C90.1156 81.7203 86.7399 83.1209 83.2187 83.125ZM16.2812 21.1875C14.002 21.1875 11.8162 22.0929 10.2046 23.7046C8.59291 25.3162 7.6875 27.502 7.6875 29.7812V69.8437C7.6875 72.123 8.59291 74.3088 10.2046 75.9204C11.8162 77.5321 14.002 78.4375 16.2812 78.4375H83.2187C85.4979 78.4375 87.6838 77.5321 89.2954 75.9204C90.9071 74.3088 91.8125 72.123 91.8125 69.8437V29.7812C91.8125 27.502 90.9071 25.3162 89.2954 23.7046C87.6838 22.0929 85.4979 21.1875 83.2187 21.1875H16.2812Z"
                                                fill="#d4af37"></path>
                                                <path
                                                d="M49.9998 59.5C47.1085 59.5045 44.2945 58.5665 41.9842 56.8281L5.49978 29.2343C5.242 29.0534 5.02333 28.8224 4.85682 28.5551C4.69031 28.2878 4.57938 27.9897 4.53066 27.6785C4.48194 27.3674 4.49642 27.0496 4.57324 26.7442C4.65006 26.4388 4.78765 26.152 4.97778 25.9009C5.16791 25.6499 5.40669 25.4397 5.67985 25.283C5.95302 25.1263 6.25497 25.0262 6.56767 24.9888C6.88036 24.9514 7.1974 24.9773 7.49983 25.0652C7.80227 25.153 8.0839 25.3009 8.32791 25.5L44.8123 53.125C46.3105 54.2434 48.1301 54.8476 49.9998 54.8476C51.8694 54.8476 53.689 54.2434 55.1873 53.125L91.6716 25.5C91.9157 25.3009 92.1973 25.153 92.4997 25.0652C92.8022 24.9773 93.1192 24.9514 93.4319 24.9888C93.7446 25.0262 94.0465 25.1263 94.3197 25.283C94.5929 25.4397 94.8316 25.6499 95.0218 25.9009C95.2119 26.152 95.3495 26.4388 95.4263 26.7442C95.5031 27.0496 95.5176 27.3674 95.4689 27.6785C95.4202 27.9897 95.3092 28.2878 95.1427 28.5551C94.9762 28.8224 94.7576 29.0534 94.4998 29.2343L58.0154 56.8281C55.7051 58.5665 52.8911 59.5045 49.9998 59.5Z"
                                                fill="#d4af37"></path>
                                                <path
                                                d="M6.51565 76.7813C6.0403 76.782 5.57597 76.6382 5.18427 76.3689C4.79258 76.0995 4.49204 75.7175 4.32253 75.2734C4.15303 74.8292 4.12257 74.3441 4.2352 73.8823C4.34783 73.4205 4.59822 73.0038 4.95315 72.6876L33.7032 47.047C34.1673 46.6326 34.777 46.4195 35.3982 46.4547C36.0194 46.4898 36.6013 46.7703 37.0157 47.2345C37.4301 47.6986 37.6431 48.3083 37.6079 48.9296C37.5728 49.5508 37.2923 50.1326 36.8282 50.547L8.07815 76.1876C7.6512 76.5761 7.09285 76.7882 6.51565 76.7813ZM93.4844 76.7813C92.9072 76.7882 92.3489 76.5761 91.9219 76.1876L63.1719 50.547C62.7078 50.1326 62.4273 49.5508 62.3921 48.9296C62.3569 48.3083 62.57 47.6986 62.9844 47.2345C63.3988 46.7703 63.9806 46.4898 64.6018 46.4547C65.223 46.4195 65.8328 46.6326 66.2969 47.047L95.0313 72.6876C95.3862 73.0038 95.6366 73.4205 95.7492 73.8823C95.8619 74.3441 95.8314 74.8292 95.6619 75.2734C95.4924 75.7175 95.1919 76.0995 94.8002 76.3689C94.4085 76.6382 93.9441 76.782 93.4688 76.7813H93.4844Z"
                                                fill="#d4af37"></path>
                                            </svg>
                                        </div>
                                        <p className="text-base font-text text-t-gold">Email:</p>
                                        <p className="text-base font-text text-t-white">kaynk.enes@gmail.com</p>
                                        </div>
                                    </div>
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
                                <button className="flex text-t-white group-hover:text-t-gold font-header-text transition-colors duration-300 text-sm uppercase tracking-widest cursor-pointer">
                                    Projects
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down transform rotate-270 group-hover:rotate-360 transition-transform duration-300">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </button>
                            </div>

                            <div className="flex invisible absolute -left-[100px] z-50 bg-white rounded-md shadow-xl group-hover:visible ">
                                <div className="flex flex-col text-center">
                                    <button onClick={() => scrollToElement("amazon-test-automation")} className="text-t-gold hover:bg-t-gold hover:text-t-white hover:bg-dark-gray font-header-text transition-colors duration-300 text-sm tracking-widest m-2 p-2 rounded-md w-40 cursor-pointer">
                                        Amazon Test Automation
                                    </button>

                                    <button onClick={() => scrollToElement("trendyol-test-automation")} className="text-t-gold hover:bg-t-gold hover:text-t-white hover:bg-dark-gray font-header-text transition-colors duration-300 text-sm tracking-widest m-2 p-2 rounded-md w-40 cursor-pointer">
                                        Trendyol Test Automation
                                    </button>

                                    <button onClick={() => scrollToElement("web-movie-site")} className="text-t-gold hover:bg-t-gold hover:text-t-white hover:bg-dark-gray font-header-text transition-colors duration-300 text-sm tracking-widest m-2 p-2 rounded-md w-40 cursor-pointer">
                                        Web Movie Site
                                    </button>
                                </div>

                                <div className="flex flex-col text-center">
                                    <button onClick={() => scrollToElement("instagram-mobile-test-automation")} className="text-t-gold hover:bg-t-gold hover:text-t-white font-header-text transition-colors duration-300 text-sm tracking-widest m-2 p-2 rounded-md w-40 cursor-pointer">
                                        Instagram Mobile Test Automation
                                    </button>

                                    <button onClick={() => scrollToElement("x-test-automation")} className="text-t-gold hover:bg-t-gold hover:text-t-white font-header-text transition-colors duration-300 text-sm tracking-widest m-2 p-2 rounded-md w-40 cursor-pointer">
                                        X Test Automation
                                    </button>

                                    <button onClick={() => scrollToElement("personal-portfolio-website")} className="text-t-gold hover:bg-t-gold hover:text-t-white font-header-text transition-colors duration-300 text-sm tracking-widest m-2 p-2 rounded-md w-40 cursor-pointer">
                                        Personal Portfolio Website
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button onClick={() => scrollToElement("certificate")}  className="text-t-white hover:text-t-gold font-header-text transition-colors duration-300 text-sm uppercase tracking-widest cursor-pointer">
                                Certificates
                            </button>
                        </div>

                        <div className='relative flex items-center w-full lg:max-w-[400px] 2xl:max-w-[800px]'>
                            <input className="searchInput w-full rounded-lg border border-gray-300 bg-white py-2 pl-12 pr-4 leading-5 placeholder-gray-500 focus:border-[#d4af37] focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#d4af37] sm:text-md" placeholder="Search" type="text" name='searchBox' id='1' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>

                            <button onClick={() => toResearch(".searchInput")} className="absolute left-3 cursor-pointer text-[#d4af37]">
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </button>

                            {searchTerm && (
                                <div className={`absolute invisible ${searchTerm ? 'visible' : 'invisible'} top-16 rounded-md bg-b-light-black backdrop-blur-sm shadow-xl w-full`}>
                                    {filteredItems.map((item, index) => (
                                        <button key={index} onClick={() => { item.action(); setSearchTerm(''); }} className="flex gap-2 items-center text-t-white font-text text-lg cursor-pointer hover:text-t-gold transition-colors duration-200 ease-in-out rounded-lg w-full px-4 py-2">

                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text-icon lucide-file-text">
                                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                                                <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                                                <path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>
                                            </svg>

                                            {item.label}

                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-up-right-icon lucide-move-up-right">
                                                <path d="M13 5H19V11"/>
                                                <path d="M19 5L5 19"/>
                                            </svg>
                                        </button>
                                    ))}
                                </div>
                            )}
                            
                        </div>

                        <button onClick={() => scrollToElement("contact")} className="px-3 py-2 bg-transparent border border-t-gold text-t-gold hover:bg-t-gold hover:text-t-white transition-all duration-300 uppercase tracking-widest font-header-text text-sm cursor-pointer rounded-md">
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
