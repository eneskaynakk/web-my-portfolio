"use client"
import Link from 'next/link';
import Image from 'next/image';

import { usePathname } from "next/navigation";

const Footer = () => {

    const pathname = usePathname();
    
    if (pathname === "/auth/register" || pathname === "/auth/login") {
        return null;
    }

    return (
        <footer className="bg-black relative mt-72">
            
            <div className="relative container mx-auto pt-16 pb-8">

                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">

                    <div className="w-full md:w-1/2 lg:w-2/5">
                        <div className="flex items-center space-x-3 mb-6">
                            <Link href="/">
                                <Image src="/images/siteIcon.png" alt="Main Image" width={84} height={84} priority />
                            </Link>
                        </div>
                        <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                            Building exceptional digital experiences with modern design principles and cutting-edge technology.
                            
                        </p>
                        <div className="flex space-x-4">
                            <Link href="https://www.linkedin.com/in/enes-kaynak/" className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group">
                                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="#B7B7B7" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </Link>
                            <Link href="https://github.com/eneskaynakk" className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B7B7B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github">
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                    <path d="M9 18c-4.51 2-5-2-7-2" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-2/5 mt-10">
                        <h3 className="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
                        <p className="text-gray-300 mb-4">Get the latest news and updates delivered to your inbox.</p>
                        <div className="flex flex-col sm:flex-row sm:justify-end space-y-3 sm:space-y-0 sm:space-x-3">
                            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"/>
                            <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium shadow-lg cursor-pointer">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Home</Link>
                            </li>
                            <li>
                                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Projects</Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Resume</Link>
                            </li>
                            <li>
                                <Link href="/certificates" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Certificates</Link>
                            </li>
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Get In Touch</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Start a Project</Link>
                            </li>
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Join the Team</Link>
                            </li>
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Press & Media</Link>
                            </li>
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Drop Us a Note</Link>
                            </li>
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Best Service</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
                        <ul className="space-y-3">
                            <li>
                                <p className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">
                                    Help Center
                                </p>
                            </li>
                            <li>
                                <p className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">
                                    Documentation
                                </p>
                            </li>
                            <li>
                                <p className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">
                                    Privacy Policy
                                </p>
                            </li>
                            <li>
                                <p className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">
                                    Terms of Service
                                </p>
                            </li>
                            <li>
                                <p className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">
                                    Cookie Policy
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        © 2025 Your Company Name. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-6 text-sm text-gray-400">
                        <span>Made with</span>
                        <div className="flex items-center space-x-1">
                            <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                            <span>by Our Team</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;