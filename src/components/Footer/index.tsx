"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useWindowSize } from '@/hooks/useWindowSize';

const Footer = () => {
    
    const windowWidth = useWindowSize();
    const isMobile = windowWidth !== null && windowWidth < 720;

    const router = useRouter();

    const scrollToElement = (elementId: string) =>{
        router.push('/#' + elementId );
    }

    return (
        <footer className="bg-black relative">
            <div className="relative container mx-auto pb-16">
                <div className='lg:flex lg:justify-between px-4 lg:px-0'>
                    {isMobile ? (
                        <>
                            <div className='flex flex-col'>
                                <div className="mb-6 inline-flex">
                                    <Link href="/" className='inline-flex'>
                                        <Image src="/images/siteIcon.png" alt="Site Icon" width={100} height={100}/>
                                    </Link>
                                </div>
                                
                                <p className="text-gray-300 mb-4 max-w-sm leading-relaxed">
                                    Building exceptional digital experiences with modern design principles and cutting-edge technology.
                                </p>

                                <div className="flex gap-4">
                                    <Link href="https://www.linkedin.com/in/enes-kaynak/" className="rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg group">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 50 50" fill="#d4af37">
                                            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                                        </svg>
                                    </Link>
                                    <Link href="https://github.com/eneskaynakk" className="rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg group">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 30 30" fill="#d4af37">
                                            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className='flex justify-between items-center pt-10 gap-6'>
                                <div className='flex flex-col'>
                                    <h3 className="text-lg font-semibold mb-4 text-t-gold">Quick Links</h3>
                                    <ul className="space-y-3">
                                        <li>
                                            <Link href="/" className="text-gray-300 active:text-t-gold transition-colors duration-200 hover:translate-x-1 transform inline-block">
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <button onClick={() => scrollToElement("project")} className="text-gray-300 active:text-t-gold inline-block cursor-pointer">
                                                Projects
                                            </button>
                                        </li>
                                        <li>
                                            <Link href="/resume" className="text-gray-300 active:text-t-gold inline-block">
                                                Resume
                                            </Link>
                                        </li>
                                        <li>
                                            <button onClick={() => scrollToElement("certificate")} className="text-gray-300 active:text-t-gold inline-block cursor-pointer">
                                                Certificates
                                            </button>
                                        </li>
                                        <li>
                                            <button onClick={() => scrollToElement("contact")} className="text-gray-300 active:text-t-gold inline-block">
                                                Contact
                                            </button>
                                        </li>
                                    </ul>
                                </div>

                                <div className='flex flex-col'>
                                    <h3 className="text-lg font-semibold mb-4 text-t-gold">Get In Touch</h3>
                                    <ul className="space-y-3">
                                        <li>
                                            <Link href="/" className="text-gray-300 active:text-t-gold inline-block">
                                                Start a Project
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/" className="text-gray-300 active:text-t-gold inline-block">
                                                Join the Team
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/" className="text-gray-300 active:text-t-gold inline-block">
                                                Press & Media
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/" className="text-gray-300 active:text-t-gold inline-block">
                                                Best Design
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/" className="text-gray-300 active:text-t-gold inline-block">
                                                Best Service
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                             <div className='flex flex-col pt-10'>
                                <h3 className="text-lg font-semibold mb-4 text-t-gold">Support</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/" className="text-gray-300 hover:text-t-gold transition-colors duration-200 hover:translate-x-1 transform inline-block">
                                            Help Center
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="text-gray-300 hover:text-t-gold transition-colors duration-200 hover:translate-x-1 transform inline-block">
                                            Documentation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="text-gray-300 hover:text-t-gold transition-colors duration-200 hover:translate-x-1 transform inline-block">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="text-gray-300 hover:text-t-gold transition-colors duration-200 hover:translate-x-1 transform inline-block">
                                            Terms of Service
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="text-gray-300 hover:text-t-gold transition-colors duration-200 hover:translate-x-1 transform inline-block">
                                            Cookie Policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        
                        <>
                            <div className='flex flex-col'>
                                <div className="mb-6 inline-flex">
                                    <Link href="/" className='inline-flex'>
                                        <Image src="/images/siteIcon.png" alt="Site Icon" width={100} height={100}/>
                                    </Link>
                                </div>
                                
                                <p className="text-gray-300 mb-4 max-w-sm leading-relaxed">
                                    Building exceptional digital experiences with modern design principles and cutting-edge technology.
                                </p>

                                <div className="flex space-x-4">
                                    <Link href="https://www.linkedin.com/in/enes-kaynak/" target="_blank" className="rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg group">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 50 50" fill="#d4af37">
                                            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                                        </svg>
                                    </Link>
                                    <Link href="https://github.com/eneskaynakk" target="_blank" className="rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg group">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 30 30" fill="#d4af37">
                                            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            
                            <div className='flex flex-col'>
                                <h3 className="text-lg font-semibold mb-4 text-t-gold">Quick Links</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/" className="text-gray-300 hover:text-t-gold transition-colors duration-200 hover:translate-x-1 transform inline-block">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <button onClick={() => scrollToElement("project")} className="text-gray-300 hover:text-t-gold transition-colors duration-200 hover:translate-x-1 transform inline-block cursor-pointer">
                                            Projects
                                        </button>
                                    </li>
                                    <li>
                                        <Link href="/resume" className="text-gray-300 hover:text-t-gold transition-colors duration-200 hover:translate-x-1 transform inline-block">
                                            Resume
                                        </Link>
                                    </li>
                                    <li>
                                        <button onClick={() => scrollToElement("certificate")} className="text-gray-300 hover:text-t-gold transition-colors duration-200 hover:translate-x-1 transform inline-block cursor-pointer">
                                            Certificates
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => scrollToElement("contact")} className="text-gray-300 hover:text-t-gold transition-colors duration-200 hover:translate-x-1 transform inline-block cursor-pointer">
                                            Contact
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            <div className='flex flex-col'>
                                <h3 className="text-lg font-semibold mb-4 text-t-gold">Get In Touch</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/" className="text-gray-300 hover:text-t-gold transition-colors duration-200 hover:translate-x-1 transform inline-block">
                                            Start a Project
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="text-gray-300 hover:text-t-gold transition-colors duration-200 hover:translate-x-1 transform inline-block">
                                            Join the Team
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="text-gray-300 hover:text-t-gold transition-colors duration-200 hover:translate-x-1 transform inline-block">
                                            Press & Media
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="text-gray-300 hover:text-t-gold transition-colors duration-200 hover:translate-x-1 transform inline-block">
                                            Best Design
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="text-gray-300 hover:text-t-gold transition-colors duration-200 hover:translate-x-1 transform inline-block">
                                            Best Service
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className='flex flex-col'>
                                <h3 className="text-lg font-semibold mb-4 text-t-gold">Support</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/" className="text-gray-300 hover:text-t-gold transition-colors duration-200 hover:translate-x-1 transform inline-block">
                                            Help Center
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="text-gray-300 hover:text-t-gold transition-colors duration-200 hover:translate-x-1 transform inline-block">
                                            Documentation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="text-gray-300 hover:text-t-gold transition-colors duration-200 hover:translate-x-1 transform inline-block">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="text-gray-300 hover:text-t-gold transition-colors duration-200 hover:translate-x-1 transform inline-block">
                                            Terms of Service
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="text-gray-300 hover:text-t-gold transition-colors duration-200 hover:translate-x-1 transform inline-block">
                                            Cookie Policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <div className="container mx-auto border-t border-t-gold pt-8 pb-8 flex flex-col md:flex-row items-center justify-between">
                <p className="text-t-white text-sm mb-4 md:mb-0">
                    © 2025 E.K. All rights reserved.
                </p>
                <div className="flex items-center space-x-6">
                    <span className='text-sm text-t-white'>Made with</span>
                    <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4 text-red-500 animate-pulse" fill="#d4af37" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <span className='text-sm text-t-white'>by Our Team</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;