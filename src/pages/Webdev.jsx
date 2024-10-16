import React from 'react'
import Header3 from '../components/Header3'
import Git from '../components/Git'
import Web1 from '../components/Web1'
import Process from '../components/Process'
import TestimonialCard1 from '../components/TestimonialCard1'
import Footer from '../components/Footer'
import AccordionList from '../components/AccordionList'



const Webdev = () => {
  return (
    <>
      <Header3 />
      <Git />
      <div className="text-center sm:text-left my-12 sm:my-20 sm:pl-20">
        <h1 className="sm:text-5xl text-2xl font-semibold">Service Description </h1>
        <div className="flex justify-center sm:justify-start items-center sm:items-start mt-2">
          <div className="sm:w-64 w-1/5 border-t-2 border-purple-500 sm:ml-12"></div>
          <div className="flex space-x-1 ml-2 text-purple-500">
            <span className="w-2 h-2 rounded-full bg-current"></span>
            <span className="w-2 h-2 rounded-full bg-current"></span>
            <span className="w-2 h-2 rounded-full bg-current"></span>
          </div>
        </div>
      </div>
      <div className='sm:text-lg text-sm font-semibold sm:px-40 px-3 my-20'>
        Lorem ipsum dolor sit amet consectetur. Nibh non viverra purus nunc. In suscipit eget tristique pretium. Congue
        quam diam enim mi pellentesque augue arcu. Praesent aliquam dapibus habitant mattis porta lorem porttitor
        lacus commodo.Elementum elementum orci etiam fames venenatis sed.n suscipit eget tristique pretium. Congue
        quam diam enim mi pellentesque augue arcu. Praesent aliquam dapibus habitant mattis porta lorem porttitor
        lacus commodo.Elementum elementum orci etiam fames venenatis sed more...
      </div>
      <Web1/>
      <div className="text-center sm:text-left my-12 sm:my-20 sm:pl-20">
        <h1 className="sm:text-5xl text-2xl font-semibold">Advantages </h1>
        <div className="flex justify-center sm:justify-start items-center sm:items-start mt-2">
          <div className="sm:w-32 w-1/6 border-t-2 border-purple-500 sm:ml-10"></div>
          <div className="flex space-x-1 ml-2 text-purple-500">
            <span className="w-2 h-2 rounded-full bg-current"></span>
            <span className="w-2 h-2 rounded-full bg-current"></span>
            <span className="w-2 h-2 rounded-full bg-current"></span>
          </div>
        </div>
      </div>
      <div className='sm:text-lg text-sm font-semibold sm:px-40 px-3 my-20'>
      <ul className='sm:list-disc list-decimal pl-4 sm:pl-0 sm:list-inside sm:text-xl text-sm   font-semibold pb-10 sm:space-y-8 space-y-4  '>
                        <li>Lorem ipsum dolor sit amet consectetur. Nulla commodo fermentum felis enim eleifend tellus leo </li>
                        <li>Tristique morbi suspendisse sit vestibulum euismod sit in aliquam. quam elementum sed</li>
                        <li>Dictum velit eros amet morbi augue egestas</li>
                        <li>Congue facilisis senectus amet commodo aliquam vitae mi amet duis</li>
                        <li>Arcu malesuada quam arcu consectetur aliquam. Habitasse eu sem vitae vel id diam</li>
                        <li>Euismod in eget risus etiam a nullam. Potenti netus ipsum sit amet in diam sit vel non.</li>
       </ul>
      </div>
      <Process/>
      <TestimonialCard1/>
      <AccordionList/>

      <Footer/>



    </>
  )
}

export default Webdev