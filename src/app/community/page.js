import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import "./community.css"

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <Navbar />
      <div className="container mx-auto mt-24 px-4 sm:px-6 lg:px-8">
        <h1 className='text-left text-black text-6xl font-bold ml-18'>Community</h1>
        <div className='flex flex-wrap justify-between'>
          <div className='community_cards  mt-10 mx-4 sm:mx-0'>
            <Image
              className="mr-2"
              src={"/images/cs.jpg"}
              alt="logo"
              width={250}
              height={250}
            />
            <h1 className='font-semibold mt-5'>Computer Engineering Department</h1>
          </div>
          <div className='community_cards mt-10 mx-4 sm:mx-0'>
            <Image
              className="mr-2"
              src={"/images/mech.png"}
              alt="logo"
              width={250}
              height={250}
            />
            <h1 className='font-semibold mt-5'>Mechanical Engineering Department</h1>
          </div>
          <div className='community_cards mt-10 mx-4 sm:mx-0'>
            <Image
              className="mr-2"
              src={"/images/entc.png"}
              alt="logo"
              width={250}
              height={250}
            />
            <h1 className='font-semibold mt-5'>ENTC Department</h1>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page;
