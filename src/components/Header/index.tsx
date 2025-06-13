"use client";
import Link from 'next/link';

const Header = () => {

    function toResearch(){
        const element = document.querySelector(".searchInput") as HTMLElement;
        element.focus();
    }
    return (
        <header className="absolute top-0 left-0 w-full z-50 p-[9px]">
            <nav>
                <div className=" flex justify-center items-center gap-12">
                    <Link href="/" className="flex relative text-white cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-white before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:top-7 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-white after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:top-7 after:right-[50%]">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 3 60 50">
                                <path fill="#FFFF" d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path>
                            </svg>
                            <span>MyProfile</span>
                    </Link>

                    <div className="group relative">
                        <div className="flex items-center justify-between space-x-5 ">
                            <Link href="/projects" className="text-white flex cursor-pointer">
                                <span>Projects</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 22" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down translate-y-[3px] transform rotate-270 group-hover:rotate-360 transition-transform duration-300">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </Link>
                        </div>

                        <div className="flex invisible absolute z-50 px-4 py-1 rounded-md bg-white rounded shadow-xl group-hover:visible">
                            <div className="flex flex-col">
                                <Link href="/" className="text-black my-2 py-1 md:mx-2 hover:text-gray-500">
                                    <span>Projects</span>
                                </Link>

                                <Link href="/" className="text-black my-2 py-1 md:mx-2 hover:text-gray-500">
                                    <span>Projects</span>
                                </Link>
                            </div>

                            <div className="flex flex-col">
                                <Link href="/" className="text-black my-2 py-1 md:mx-2 hover:text-gray-500">
                                    <span>Projects</span>
                                </Link>

                                <Link href="/" className="text-black my-2 py-1 md:mx-2 hover:text-gray-500">
                                    <span>Projects</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <Link href="/about" className="relative text-white cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-white before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:top-7 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-white after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:top-7 after:right-[50%]">
                        <span>About</span>
                    </Link>

                    <Link href="/" className="relative text-white cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-white before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:top-7 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-white after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:top-7 after:right-[50%]">
                        <span>Contact</span>
                    </Link>

                    <div className="flex">
                        <input className="searchInput inline w-[800px] rounded-full border border-gray-300 bg-white py-3 pl-10 pr-48 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-md" placeholder="Search" type="text"/>
                        <button onClick={toResearch} className="relative cursor-pointer right-[792px]">
                            <svg className="sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="#000000">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </button>
                        
                    </div>

                    <Link href="/login" className="flex relative text-white cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-white before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:top-7 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-white after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:top-7 after:right-[50%]">
                        <span>Login</span>
                    </Link>

                    <Link href="/register" className="flex relative text-white cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-white before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:top-7 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-white after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:top-7 after:right-[50%]">
                        <span>SignUp</span>
                    </Link>

                </div>
            </nav>
        </header>
    )
}

export default Header;
