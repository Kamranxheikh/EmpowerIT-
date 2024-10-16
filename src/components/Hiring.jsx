import React from 'react'
import Rectangle6 from '../assets/pictures/Rectangle6.png'

const Hiring = () => {
    const hiring = [
        {
            title: "The Fastest Hiring And Payments",
            desc: "We specialize in delivering cutting-edge IT services tailored to meet the unique needs of businesses across industries. Our expert team is dedicated to providing comprehensive solutions that drive efficiency, enhance  security, and foster innovation",
            list1: "Managed IT Services:",
            list2: "Cloud Services:",
            list3: " Cybersecurity:",
            list4: "IT Consulting:",
            link: " Pay your external workforce in one click.",
        }
    ]
    return (
        <div className='sm:flex sm:p-11  sm:space-x-12 grid grig-col-1'>
            <img src={Rectangle6} alt="" className='duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 sm:w-[53%] w-full sm:h-full '/>
            {hiring.map((item, index) =>(
                <div key={index}  className=' space-y-10 my-4 p-5 sm:p-0 sm:mb-20 mb-8'>
                    <h1 className='sm:text-4xl text-3xl text-center  sm:text-left  tracking-wide font-bold '>{item.title}</h1>
                    <p className='sm:text-xl text-lg text-center  sm:text-left tracking-wide '>{item.desc}</p>
                    <ul className='list-disc text-xl list-inside  font-bold pb-10  '>
                        <li>{item.list1}</li>
                        <li>{item.list2}</li>
                        <li>{item.list3}</li>
                        <li>{item.list4}</li>
                    </ul>
                    <a href="#" className='sm:text-xl text-lg text-center  sm:text-left  font-semibold border-b b-2 border-black pt-10  '>{item.link}</a>

                </div>

            ))}
        </div> 
    )
}

export default Hiring