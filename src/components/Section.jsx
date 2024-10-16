import React from 'react'
import Rectangle12 from '../assets/pictures/Rectangle12.png'
import Rectangle13 from '../assets/pictures/Rectangle13.png'
import Rectangle14 from '../assets/pictures/Rectangle14.png'
import Rectangle15 from '../assets/pictures/Rectangle15.png'
import { FaCog, FaBolt, FaMoneyBill, FaUser } from 'react-icons/fa';




const Section = () => {
    return (
        <>
            <div className='sm:h-[220vh] h-[320vh] bg-black text-white '>
                <div className='grid grid-cols-1 sm:grid-cols-4 sm:gap-8 pt-20 p-5 mx-auto'>
                    <img src={Rectangle12} alt="" className=' sm:h-96 h-80 w-full  duration-500 ease-in-out sm:mb-0 mb-12 transform hover:-translate-y-1 hover:scale-105 ' />
                    <img src={Rectangle13} alt="" className=' sm:h-96 h-80 w-full duration-500 ease-in-out sm:mb-0 mb-12 transform hover:-translate-y-1 hover:scale-105 ' />
                    <img src={Rectangle14} alt="" className=' sm:h-96 h-80 w-full duration-500 ease-in-out sm:mb-0 mb-12 transform hover:-translate-y-1 hover:scale-105' />
                    <img src={Rectangle15} alt="" className=' sm:h-96 h-80 w-full duration-500 ease-in-out sm:mb-0 mb-12 transform hover:-translate-y-1 hover:scale-105  ' />


                </div>
                <div>
                    <h1 className='sm:text-4xl text-xl text-white sm:w-[50%] px-2 sm:px-10 font-semibold pb:20 sm:pb-10 py-5 sm:py-20'>We specialize in delivering cutting edge
                        IT services tailored to meet the unique
                        needs of businesses across industries.
                        Our expert team is dedicated to
                        providing comprehensive solutions that
                        drive efficiency, enhance security, and
                        foster innovation.
                    </h1>
                    <a href="#" className=' sm:ml-10 ml-4 items-center justify-center text-sm sm:text-lg text-left font-semibold border-b b-2 border-white pt-4  '> Pay your external workforce in one click.
                    </a>

                </div>
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


export default Section