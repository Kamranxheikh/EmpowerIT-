import React from 'react'
import img1 from '../assets/pictures/img1.png';


const Img = () => {
    return (
        <>
    <div>
        <img src={img1} alt="" 
        className='mx-auto sm:w-[70%] sm:mt-32 mt-10 w-full p-2 rounded-lg
        w-76 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'
        />
    </div>
    <h1 className='md:mx-auto md:w-[70%] text-lg sm:bg-transparent p-4 sm:p-0 font-semibold   sm:text-2xl sm:font-bold mb-10 sm:mb-40 sm:text-left text-center '>
        Give your company a faster, more agile way to work with freelancers and 
        contractors. Findcontract and pay yor external workforce in one click, eith 100% 
        compliance.
    </h1>
    </>
    )
}

export default Img