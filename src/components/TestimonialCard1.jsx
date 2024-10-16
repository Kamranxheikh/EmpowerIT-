
import React, { useState } from 'react';
import logo from '../assets/pictures/logo.jpeg'
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from "react-icons/io";


const testimonials = [
    {
        id: 1,
        name: 'TechSphere Solutions',
        text: 'Lorem ipsum dolor sit amet consectetur. Felis lacus at habitasse ut quis semper. Sit lectus nibh arcu risus scelerisque neque. At at eget id laoreet sed diam orci. Orci turpis magna mauris elit aliquam id arcu viverra.Orci vulputate tellus tincidunt nullam etiam. Ut morbi id elementum quam',
    },
    {
        id: 2,
        name: 'CodeCrafters',
        text: 'Lorem ipsum dolor sit amet consectetur.  Sit lectus nibh arcu risus scelerisque neque. At at eget id laoreet sed diam orci. Orci turpis magna mauris elit aliquam id arcu viverra.Orci vulputate tellus tincidunt nullam etiam. Ut morbi id elementum quam',
    },
    {
        id: 3,
        name: 'DevPulse',
        text: 'Lorem ipsum dolor sit amet consectetur. Felis lacus at habitasse ut quis semper. Sit lectus Felis lacus at habitasse ut quis semper. nibh arcu risus scelerisque neque. At at eget id laoreet sed diam orci. Orci turpis magna mauris elit aliquam id arcu viverra.Orci vulputate tellus tincidunt nullam etiam. Ut morbi id elementum quam',
    },
    {
        id: 4,
        name: 'Quantum Softworks',
        text: 'Lorem ipsum dolor sit amet consectetur.Sit lectus nibh arcu risus scelerisque neque. Felis lacus at habitasse ut quis semper. Sit lectus nibh arcu risus scelerisque neque. At at eget id laoreet sed diam orci. Orci turpis magna mauris elit aliquam id arcu viverra.Orci vulputate tellus tincidunt nullam etiam. Ut morbi id elementum quam Sit lectus nibh arcu risus scelerisque neque',
    },
];

const TestimonialCard1 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevCard = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const nextCard = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <>
            <div className="text-center  sm:my-2">
                <h1 className="sm:text-5xl text-2xl font-semibold">Client Reviews</h1>
                <div className="flex justify-center items-center mt-2">
                    <div className="sm:w-32 w-1/5 border-t-2 border-purple-500"></div>
                    <div className="flex space-x-1 ml-2 text-purple-500">
                        <span className="w-2 h-2 rounded-full bg-current"></span>
                        <span className="w-2 h-2 rounded-full bg-current"></span>
                        <span className="w-2 h-2 rounded-full bg-current"></span>
                    </div>
                </div>
            </div>
            <div className="flex sm:items-center sm:justify-center sm:min-h-screen pb-12  ">
                <button onClick={prevCard} className="text-3xl  sm:p-2 sm:mx-4 ">
                    <IoIosArrowBack className='sm:size-20 size-10' />
                </button>
                <div className="bg-cyan-50 sm:bg-white mt-20 rounded-lg shadow-2xl  sm:w-[70%] sm:h-[350px] w-full h-full    ">
                    <div className=' flex px-4 py-6 sm:py-6 sm:px-5 sm:space-x-5'>
                        <img
                            src={logo}
                            alt="Logo"
                            className=" rounded-full  duration-500 ease-in-out sm:mb-0 mb-12 transform hover:-translate-y-1 hover:scale-105"
                        />
                        <h1 className="sm:text-2xl text-xl font-bold text-purple-600 mt-9  ">
                            {testimonials[currentIndex].name}
                        </h1>
                    </div>
                    <div>
                        <p className="text-sm mx-4 pb-7 sm:font-bold sm:text-lg  sm:mx-40 sm:pb-12">
                            {testimonials[currentIndex].text}
                        </p>
                    </div>
                </div>
                <button onClick={nextCard} className="text-3xl sm:p-2 sm:mx-4 ">
                    <IoIosArrowForward  className='sm:size-20 size-10' />
                </button>
                {/* <div className="absolute bottom-10 flex space-x-2">
                    {testimonials.map((_, index) => (
                        <span
                            key={index}
                            className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-black' : 'bg-gray-400'
                                }`}
                        ></span>
                    ))}
                </div> */}
            </div>
        </>
    );
};

export default TestimonialCard1;
