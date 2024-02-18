import React from 'react';
import Navbar from './components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
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
                <Link href={"/login"}> Login</Link>
               
              </button>
              <button className='rounded-3xl w-28 p-3 bg-black hover:bg-slate-800 text-white'>
              <Link href={"/signup"}> Signup</Link>
              </button>
            </div>
            <div className='text-center mx-12  mt-8'>
              <button className='rounded-full px-10 py-5 bg-blue-500 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'>
              <Link href={"#start"}> Start</Link>
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
        <div className='mt-20'>
          <h1 className='text-center text-6xl font-bold text-black mt-20'>Upcoming Events this month</h1>
        </div>
        <div className='bg-gray-100 w-full h-full'>
  <h1 className='text-left text-6xl font-semibold text-black mt-20'>ARTIMAS</h1>
  <div id="start" className='event_card mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
    <div className="relative mx-6 md:mx-0">
      <Image
        src={"/images/aimsa.jpg"} // Replace with your image path
        alt="hero image"
        className="rounded-3xl"
        width={500}
        height={500}
      />
    </div>
    <div className="md:col-span-1 lg:col-span-2">
      <p className='mx-5 font-medium text-4xl text-black '>Date: 22nd Feb 2024 at 9 AM IST</p>
      <a href="#" className="text-blue-700 font-semibold mx-5 underline">Register Now</a>
    </div>
  </div>
</div>

      </div>
    </main>
  );
};

export default Page;
