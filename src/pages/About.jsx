import React from 'react'
import Header1 from '../components/Header1'
import Git from '../components/Git'
import Team from '../components/Team'
import Mission from '../components/Mission'
import Goal from '../components/Goal'
import Chose from '../components/Chose'
import TestimonialCard from '../components/TestimonialCard'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
      <Header1 />
      <Git />
      <div className="text-center my-12 sm:my-20">
        <h1 className="sm:text-4xl text-2xl font-bold">Wellcome</h1>
        <div className="flex justify-center items-center mt-2">
          <div className="sm:w-20 w-1/2 border-t-2 border-purple-500"></div>
          <div className="flex space-x-1 ml-2 text-purple-500">
            <span className="w-2 h-2 rounded-full bg-current"></span>
            <span className="w-2 h-2 rounded-full bg-current"></span>
            <span className="w-2 h-2 rounded-full bg-current"></span>
          </div>
        </div>
      </div>
      <div>
        <p className='md:px-32 px-3 text-lg sm:font-semibold '>background or why we start a company ...Lorem ipsum dolor sit amet consectetur. Pulvinar scelerisque purus suscipit cursus vestibulum nibh
          proin neque. Sed neque cursus congue ultrices enim donec in. Diam pretium odio tortor amet amet molestie enim aliquam massa vitae.Lorem
          ipsum dolor sit amet consectetur. Pulvinar scelerisque purus suscipit cursus vestibulum nibh proin neque. Sed neque cursus congue ultrices
          enim donec in. Diam pretium odio tortor amet amet molestie enim aliquam massa vitae.
        </p>
      </div>
      <div className="text-center my-12 sm:my-20">
        <h1 className="sm:text-4xl text-2xl font-bold">Our Team</h1>
        <div className="flex justify-center items-center mt-2">
          <div className="sm:w-20 w-1/2 border-t-2 border-purple-500"></div>
          <div className="flex space-x-1 ml-2 text-purple-500">
            <span className="w-2 h-2 rounded-full bg-current"></span>
            <span className="w-2 h-2 rounded-full bg-current"></span>
            <span className="w-2 h-2 rounded-full bg-current"></span>
          </div>
        </div>
      </div>
      <Team />
      <Mission />
      <Goal />
      <Chose/>
      <TestimonialCard/>
      <Footer/>




    </>
  )
}

export default About