"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';


const Header = () => {

    function toResearch(){
        const element = document.querySelector(".searchInput") as HTMLElement;
        element.focus();
    }

    const pathname = usePathname();

    if (pathname === "/auth/register" || pathname === "/auth/login") {
        return null;
    }
    
    return (
        <header className="bg-black absolute w-full z-50">
            <div className='container mx-auto'>
                <div className="flex justify-between items-center py-2">
                    
                    <Link href="/">
                        <Image src="/images/siteIcon.png" alt= "Main Image" width={84} height={84} priority />
                    </Link>
                    
                    <div>
                        <Link href="/resume" className={`${pathname==="/resume" ? "text-green-600" : "text-white hover:text-green-600"} font-main`}>
                            Resume
                        </Link>
                    </div>

                     <div className="group relative">
                        <div className="flex items-center justify-between space-x-5 ">
                            <Link href="/projects" className={`${pathname==="/projects" ? "text-green-600" : "text-white hover:text-green-600"} flex font-main`}>
                                Projects
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 22" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down translate-y-[3px] transform rotate-270 group-hover:rotate-360 transition-transform duration-300 hover:text-[#6b8a56]">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </Link>
                        </div>

                        <div className="flex invisible absolute z-50 rounded-md shadow-xl group-hover:visible">
                            <div className="flex flex-col">
                                <Link href="/" className="text-white m-2 p-2 hover:bg-green-600 hover:text-[#101828] rounded-md w-32">
                                    Projects
                                </Link>

                                <Link href="/" className="text-white m-2 p-2 hover:bg-green-600 hover:text-[#101828] rounded-md w-32">
                                    Projects
                                </Link>
                            </div>

                            <div className="flex flex-col">
                                <Link href="/" className="text-white m-2 mb-2 p-2 hover:bg-green-600 hover:text-[#101828] rounded-md w-32">
                                    Projects
                                </Link>

                                <Link href="/" className="text-white m-2 p-2 hover:bg-green-600 hover:text-[#101828] rounded-md w-32">
                                    Projects
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Link href="/certificates" className={`${pathname==="/certificates" ? "text-green-600" : "text-white hover:text-green-600"} font-main`}>
                            Certificates
                        </Link>
                    </div>

                    <div className='flex'>
                        <input className="searchInput w-[800px] rounded-full border border-gray-300 bg-white py-3 pl-12 pr-48 leading-5 placeholder-gray-500 focus:border-[#00a63e] focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00a63e] sm:text-md" placeholder="Search" type="text" name='searchBox' id='1'/>

                        <button onClick={toResearch} className="absolute cursor-pointer right-[1163px] top-[39px]">
                            <svg className="sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="#00a63e">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </button>
                    </div>

                    <div>
                        <Link href="/auth/login" className="text-white hover:text-green-600 font-main">
                            Login
                        </Link>
                    </div>

                    <div>
                        <Link href="/auth/register" className="text-white hover:text-green-600 font-main">
                            SignUp
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header;
