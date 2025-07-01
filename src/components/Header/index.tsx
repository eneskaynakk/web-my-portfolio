"use client";
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {

    function toResearch(){
        const element = document.querySelector(".searchInput") as HTMLElement;
        element.focus();
    }
    
    return (

        <header className="bg-b-black overflow-x-hidden absolute w-full z-50">
            <nav className="fixed w-full z-50 bg-gradient-to-b from-b-black/90 to-transparent backdrop-blur-md">
                <div className='container mx-auto'>
                    <div className="flex justify-between items-center py-2">
                        
                        <Link href="/">
                            <Image src="/images/siteIcon.png" alt= "Main Image" width={84} height={84} priority />
                        </Link>
                        
                        <div>
                            <Link href="/resume" className="text-t-white hover:text-t-gold font-header-title transition-colors duration-300 text-sm uppercase tracking-widest">
                                Resume
                            </Link>
                        </div>

                        <div className="group relative">
                            <div>
                                <Link href="/projects" className="flex text-t-white group-hover:text-t-gold font-header-title transition-colors duration-300 text-sm uppercase tracking-widest">
                                    Projects
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down transform rotate-270 group-hover:rotate-360 transition-transform duration-300">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </Link>
                            </div>

                            <div className="flex invisible absolute left-[-100px] z-50 rounded-md shadow-xl group-hover:visible ">
                                <div className="flex flex-col text-center">
                                    <Link href="/" className="text-t-white hover:text-t-gold hover:bg-dark-gray font-header-title transition-colors duration-300 text-sm tracking-widest m-2 p-2 rounded-md w-40">
                                        Amazon Test Automation
                                    </Link>

                                    <Link href="/" className="text-t-white hover:text-t-gold hover:bg-dark-gray font-header-title transition-colors duration-300 text-sm tracking-widest m-2 p-2 rounded-md w-40">
                                        Trendyol Test Automation
                                    </Link>

                                    <Link href="/" className="text-t-white hover:text-t-gold hover:bg-dark-gray font-header-title transition-colors duration-300 text-sm tracking-widest m-2 p-2 rounded-md w-40">
                                        Web Movie
                                    </Link>
                                </div>

                                <div className="flex flex-col text-center">
                                    <Link href="/" className="text-t-white hover:text-t-gold hover:bg-dark-gray font-header-title transition-colors duration-300 text-sm tracking-widest m-2 p-2 rounded-md w-40">
                                        Instagram Test Automation
                                    </Link>

                                    <Link href="/" className="text-t-white hover:text-t-gold hover:bg-dark-gray font-header-title transition-colors duration-300 text-sm tracking-widest m-2 p-2 rounded-md w-40">
                                        X Test Automation
                                    </Link>

                                    <Link href="/" className="text-t-white hover:text-t-gold hover:bg-dark-gray font-header-title transition-colors duration-300 text-sm tracking-widest m-2 p-2 rounded-md w-40">
                                        Web Portfolio
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Link href="/certificates" className="text-t-white hover:text-t-gold font-header-title transition-colors duration-300 text-sm uppercase tracking-widest">
                                Certificates
                            </Link>
                        </div>

                        <div className='flex'>
                            <input className="searchInput w-[800px] rounded-full border border-gray-300 bg-white py-3 pl-12 pr-48 leading-5 placeholder-gray-500 focus:border-[#d4af37] focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#d4af37] sm:text-md" placeholder="Search" type="text" name='searchBox' id='1'/>

                            <button onClick={toResearch} className="absolute cursor-pointer right-[958px] top-[39px]">
                                <svg className="sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="#d4af37">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
