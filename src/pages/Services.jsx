import React from 'react'
import Header2 from '../components/Header2'
import Git from '../components/Git'
import  Offering from '../components/Offering'
import Hire from '../components/Hire'
import Footer from '../components/Footer'

const Services = () => {
  return (
    <>
      <Header2 />
      <Git />
      <div className="text-center my-12 sm:my-20">
        <h1 className="sm:text-5xl text-2xl font-semibold">Our Offerings</h1>
        <div className="flex justify-center items-center mt-2">
          <div className="sm:w-32 w-1/5 border-t-2 border-purple-500"></div>
          <div className="flex space-x-1 ml-2 text-purple-500">
            <span className="w-2 h-2 rounded-full bg-current"></span>
            <span className="w-2 h-2 rounded-full bg-current"></span>
            <span className="w-2 h-2 rounded-full bg-current"></span>
          </div>
        </div>
      </div>
      <Offering />
      <div className='flex justify-center items-center mb-20' >
         <button className=' md:tracking-wider   bg-violet-500 border-2 text-lg border-violet-500 py-2 md:py-3 px-3 md:px-8 text-white  mt-10'>SEE OUR WORK</button>

      </div>
      <Hire />
      <Footer/>



    </>
  )
}

export default Services