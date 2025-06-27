import Image from 'next/image';
import Link from 'next/link';

export default function RegisterPage() {

  return (

    <div className="relative flex h-screen w-full">
      <div className="h-screen w-full flex justify-center items-center">

        <Image className='blur-2xl' src="/images/subImage.jpg" alt= "Main Image" fill priority />
        <div className='absolute inset-0 bg-black opacity-50'></div>

        <div className="z-50 mx-auto flex h-full w-2/3 flex-col justify-center xl:w-[500px]">
          <div className="flex justify-center items-center">
            <Link href="/" className="-m-1.5 shrink-0">
              <Image src="/images/siteIcon.png" alt= "Main Image" width={200} height={200} priority />
            </Link>
          </div>
          <div className="mt-10">
            <form action="">
                    <div>
                        <label className="mb-2.5 block text-white" >Name</label>
                        <input className="w-full rounded-full border border-gray-300 bg-white py-3 pl-2 pr-4 leading-5 placeholder-gray-500 focus:border-green-600 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600 sm:text-md placeholder:opacity-30" placeholder="Example" type="text" name="name" id='2'/>
                    </div>

                    <div className="mt-4">
                        <label className="mb-2.5 block text-white">Email</label>
                        <input className="w-full rounded-full border border-gray-300 bg-white py-3 pl-2 pr-4 leading-5 placeholder-gray-500 focus:border-green-600 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600 sm:text-md placeholder:opacity-30" placeholder="example@gmail.com" type="email" name="email" id='3'/>
                    </div>

                    <div className="mt-4">
                        <label className="mb-2.5 block text-white">Password</label>
                        <input className="w-full rounded-full border border-gray-300 bg-white py-3 pl-2 pr-4 leading-5 placeholder-gray-500 focus:border-green-600 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600 sm:text-md placeholder:opacity-30" placeholder="********" type="password" name="password" id='4'/>
                    </div>

                    <div className="mt-4">
                        <label className="mb-2.5 block text-white">Confirm Password</label>
                        <input className="w-full rounded-full border border-gray-300 bg-white py-3 pl-2 pr-4 leading-5 placeholder-gray-500 focus:border-green-600 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600 sm:text-md placeholder:opacity-30" placeholder="********" type="password" name="password" id='5'/>
                    </div>

                    <div className="mt-8">
                        <button type="submit" className="cursor-pointer hover:bg-green-600 hover:text-gray-700 hover:ring hover:ring-gray-700 transition duration-300 inline-flex items-center justify-center rounded-full text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black py-4 w-full">Sign Up</button>
                    </div>

                    <div className=" flex justify-end">
                        <p className="flex mr-3 my-7 text-white rounded-lg">Have an account?</p>
                        <Link href="/auth/login" className="bg-white text-black h-10 px-4 py-2 my-5 hover:bg-green-600 hover:text-gray-700 hover:ring hover:ring-gray-700 transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ">
                            Login
                        </Link>
                    </div>
                </form>
          </div>
        </div>
      </div>
    </div>
  )
}

