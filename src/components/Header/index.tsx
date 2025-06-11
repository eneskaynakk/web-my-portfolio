import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
    return (
        <header>
            <nav className="bg-white shadow-lg">
                <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-36">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="flex-1 flex items-center justify-start">
                            
                            <div className="flex-shrink-0 flex items-center">
                                <div className='flex items-center'>
                                    <Image
                                    src="/images/shark.png"
                                    alt="Site Logo"
                                    width= {48}
                                    height= {48}
                                    />
                                </div>
                                <span className="ml-2 text-xl font-bold text-gray-800">My Portfolio</span>
                            </div>

                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    <Link href="/" className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md flex-1 flex items-center text-sm font-medium">
                                        <Image
                                        className='mr-1'
                                        src="/images/home.png"
                                        alt="Homepage Icon"
                                        width= {18}
                                        height= {18}
                                        />
                                        Home
                                    </Link>

                                    <div className="relative group">
                                        <Link href="/projects" className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md flex-1 flex items-center text-sm font-medium">
                                            <Image
                                            className='mr-1'
                                            src="/images/coding.png"
                                            alt="Projects Icon"
                                            width= {18}
                                            height= {18}
                                            />
                                            Projects
                                            <Image
                                            className='ml-1'
                                            src="/images/downArrow.png"
                                            alt="Projects Icon"
                                            width= {17}
                                            height= {17}
                                            />
                                        </Link>
                                        <div className="absolute left-0 mt-2 w-screen max-w-6xl bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform -translate-x-1/4">
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">QA Projects</h3>
                                                    <ul className="space-y-3">
                                                        <li><a href="#" className="text-gray-600 hover:text-indigo-600">Web Development</a></li>
                                                        <li><a href="#" className="text-gray-600 hover:text-indigo-600">Mobile Apps</a></li>
                                                        <li><a href="#" className="text-gray-600 hover:text-indigo-600">Desktop Software</a></li>
                                                        <li><a href="#" className="text-gray-600 hover:text-indigo-600">Enterprise Solutions</a></li>
                                                        <li><a href="#" className="text-gray-600 hover:text-indigo-600">API Services</a></li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Software Projects</h3>
                                                    <ul className="space-y-3">
                                                        <li><a href="#" className="text-gray-600 hover:text-indigo-600">Laptops</a></li>
                                                        <li><a href="#" className="text-gray-600 hover:text-indigo-600">Desktops</a></li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured</h3>
                                                    <div className="bg-gray-100 p-4 rounded-lg">
                                                        <img src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Featured Product" className="rounded-lg mb-3"/>
                                                        <h4 className="font-medium text-gray-900">New Release</h4>
                                                        <p className="text-sm text-gray-600 mb-2">Check out our latest product offering with advanced
                                                            features.</p>
                                                        <a href="#" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">Learn more →</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Link href="/about" className="text-gray-900 hover:bg-gray-100 px-3 py-2 flex-1 flex items-center rounded-md text-sm font-medium">
                                            <Image
                                            className='mr-1'
                                            src="/images/information.png"
                                            alt="Information Icon"
                                            width= {18}
                                            height= {18}
                                            />
                                            About
                                        </Link>
                                    </div>

                                    <div>
                                        <Link href="/" className="text-gray-900 hover:bg-gray-100 px-3 py-2 flex-1 flex items-center rounded-md text-sm font-medium">
                                            <Image
                                            className='mr-1 color-red'
                                            src="/images/operator.png"
                                            alt="Contact Icon"
                                            width= {18}
                                            height= {18}
                                            />
                                            Contact
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div className="hidden sm:flex sm:items-center">
                                <a href="#" className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">Login</a>
                                <a href="#" className="ml-4 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">SignUp</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
