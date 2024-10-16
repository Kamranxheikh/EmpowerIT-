import React from 'react'
import Rectangle5 from '../assets/pictures/Rectangle5.png'


const Web1 = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:p-10 mb-20'>
      <div className='my-6 sm:pt-5 space-y-7'>
           <h1 className='flex justify-center sm:text-2xl text-xl font-semibold text-center '>Front-End Development </h1>
          <div className='border-b-4 border-gray-300 mx-12 sm:mx-0 sm:w-[80%] sm:ml-16'></div>
           <h1 className='flex justify-center sm:text-2xl text-xl font-semibold text-center'>Back-End Development </h1>
           <div className='border-b-4 border-gray-300 mx-12 sm:mx-0 sm:w-[80%] sm:ml-16'></div>
           <h1 className='flex justify-center sm:text-2xl text-xl font-semibold text-center'>Content Management System (CMS) Integration</h1>
           <div className='border-b-4 border-gray-300 mx-12 sm:mx-0 sm:w-[80%] sm:ml-16'></div>
           <h1 className='flex justify-center sm:text-2xl text-xl font-semibold text-center'>Word-Press Development</h1>
           <div className='border-b-4 border-gray-300 mx-12 sm:mx-0 sm:w-[80%] sm:ml-16'></div>
           <h1 className='flex justify-center sm:text-2xl text-xl font-semibold text-center'>Shopify Development</h1>
           <div className='border-b-4 border-gray-300 mx-12 sm:mx-0 sm:w-[80%] sm:ml-16'></div>

      </div>
      <div>
        <img src={Rectangle5} alt="" className=' duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105'/>
      </div>

    </div>
  )
}

export default Web1