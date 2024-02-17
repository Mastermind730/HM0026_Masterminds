import React from 'react';
import Navbar from './components/Navbar';
import Image from 'next/image';
import "./home.css"
const Page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <Navbar />
      <div className="container mx-auto mt-24 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="flex flex-col text-center md:text-left md:w-1/2">
            <h1 className="text-black text-5xl font-semibold mb-4 md:mx-10 md:mt-12">
              Welcome To
            </h1>
            <h1 className="text-black text-8xl font-bold mb-4 md:mx-10 md:mt-2">
              Volunity
            </h1>
            <div className='flex mt-10 justify-evenly md:justify-evenly'>
              <button className='rounded-3xl w-28 p-3 bg-black hover:bg-slate-800 text-white mr-4'>
                Login
              </button>
              <button className='rounded-3xl w-28 p-3 bg-black hover:bg-slate-800 text-white'>
                Signup
              </button>
            </div>
            <div className='text-center mx-12  mt-8'>
              <button className='rounded-full px-10 py-5 bg-blue-500 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'>
                Start
              </button>
            </div>
            {/* Additional text or content can be added here */}
          </div>
          <div className="flex items-center justify-end md:w-1/2 mt-8 md:mt-0">
            <div className="relative ">
              <Image
                src={"/images/Logo.png"} // Replace with your image path
                alt="hero image"
                className="rounded-3xl"
                width={350}
                height={350}
              />
            </div>
          </div>
        </div>
        <div>
          <h1></h1>
        </div>
      </div>
    </main>
  );
};

export default Page;
