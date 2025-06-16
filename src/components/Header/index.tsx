"use client";
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {

    function toResearch(){
        const element = document.querySelector(".searchInput") as HTMLElement;
        element.focus();

        
    }
    return (
        <header className="abc absolute w-full z-50">
            <div className='mx-52'>
                <div className="flex justify-between items-center py-2">
                    
                    <Link href="/" className="flex relative">
                        <Image src="/images/siteIcon.png" alt= "Main Image" width={84} height={84} priority />
                    </Link>

                    <div className="group relative">
                        <div className="flex items-center justify-between space-x-5 ">
                            <Link href="/projects" className="flex">
                                <span className='text-white'>Projects</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 22" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down translate-y-[3px] transform rotate-270 group-hover:rotate-360 transition-transform duration-300">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </Link>
                        </div>

                        <div className="flex invisible absolute z-50 rounded-md shadow-xl group-hover:visible">
                            <div className="flex flex-col">
                                <Link href="/" className="m-2 p-2 hover:bg-gray-300 rounded-md w-32">
                                    <span className='text-white'>Projects</span>
                                </Link>

                                <Link href="/" className="m-2 p-2 hover:bg-gray-300 rounded-md w-32">
                                    <span className='text-white'>Projects</span>
                                </Link>
                            </div>

                            <div className="flex flex-col">
                                <Link href="/" className="m-2 mb-2 p-2 hover:bg-gray-300 rounded-md w-32">
                                    <span className='text-white'>Projects</span>
                                </Link>

                                <Link href="/" className="m-2 p-2 hover:bg-gray-300 rounded-md w-32">
                                    <span className='text-white'>Projects</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='flex'>
                        <Link href="/about" className="relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-white before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:top-7 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-white after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:top-7 after:right-[50%]">
                            <span className='text-white'>About</span>
                        </Link>
                    </div>
                    

                    <div className='flex'>
                        <Link href="/" className="relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-white before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:top-7 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-white after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:top-7 after:right-[50%]">
                            <span className='text-white'>Contact</span>
                        </Link>
                    </div>

                    <div className='flex'>
                        <input className="searchInput w-[800px] rounded-full border border-gray-300 bg-white py-3 pl-12 pr-48 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-md" placeholder="Search" type="text" name='searchBox' id='1'/>

                        <button onClick={toResearch} className="absolute cursor-pointer right-[1185px] top-[39px]">
                            <svg className="sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="#000000">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </button>
                    </div>

                    <div className='flex'>
                        <Link href="/login" className=" relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-white before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:top-7 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-white after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:top-7 after:right-[50%]">
                            <span className='text-white'>Login</span>
                        </Link>
                    </div>

                    <div className='flex'>
                        <Link href="/register" className="relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-white before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:top-7 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-white after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:top-7 after:right-[50%]">
                            <span className='text-white'>SignUp</span>
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header;
