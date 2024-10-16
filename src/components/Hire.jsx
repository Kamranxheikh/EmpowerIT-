import React from 'react'
import { FaCog, FaBolt, FaMoneyBill, FaUser } from 'react-icons/fa';
import That1 from '../components/That1'

const Hire = () => {
  
    return (
        <>
        <div className='bg-black sm:h-[120vh] h-[105vh] py-16 mb-20'>
        <That1 />

        <div className='sm:flex grid grid-cols-2  justify-around  items-center sm:mt-32 sm:p-10 mt-16 p-2'>
        <span className='flex flex-col justify-center items-center'>
            <FaCog sm:size={70}  className='text-4xl text-gray-300 sm:w-16 sm:h-16' />
            <h1 className=' text-gray-300 sm:text-4xl text-lg  font-semibold py-4 sm:py-0 sm:pt-12'>12 Services</h1>
        </span>
        <span className='flex flex-col justify-center items-center'>
        <FaBolt sm:size={70} className='text-4xl  text-gray-300 sm:w-16 sm:h-16' />
            <h1 className=' text-gray-300 sm:text-4xl text-lg py-4 sm:py-0  font-semibold sm:pt-12'>200+ Projects</h1>
        </span>
        <span className='flex flex-col justify-center items-center'>
        <FaMoneyBill sm:size={70} className='text-4xl  text-gray-300 sm:w-16 sm:h-16' />
            <h1 className=' text-gray-300 sm:text-4xl py-4 sm:py-0 text-lg  font-semibold sm:pt-12'>$200k+ Revenue</h1>
        </span>
        <span className='flex flex-col justify-center items-center'>
        <FaUser sm:size={70} className='text-4xl  text-gray-300 sm:w-16 sm:h-16' />
            <h1 className=' text-gray-300 sm:text-4xl py-4 sm:py-0 text-lg  font-semibold sm:pt-12'>300+ Happy Clients</h1>
        </span>
    </div>
    </div>
    </>
    )
}

export default Hire