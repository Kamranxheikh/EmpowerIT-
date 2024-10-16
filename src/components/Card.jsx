import React from 'react';
import { IoIosStar } from "react-icons/io";
import Rectangle55 from '../assets/pictures/Rectangle55.png';






const Card = () => {
  return (
    <div className="sm:w-1/4 sm:h-[300px] w-full h-full mb-12 sm:mb-0  bg-white  rounded-lg  shadow-2xl  ">
      <div className="p-4 bg-red-600 flex items-center justify-between my-4 border-b border-black b-2">
        <div className="text-white flex pb-2">
        <IoIosStar size={24} color="white" />
        <span><h1 className='flex justify-center pl-24 text-white text-center text-2xl'>REVIEW</h1></span>
        </div>
      </div>
      <div className="p-4 my-8">
        <div className="flex items-center mb-4">
          <img
            src={Rectangle55}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <h3 className="font-bold">JOHN SMITH</h3>
            <p className="text-xs text-gray-500">CUSTOMER, AGENT</p>
          </div>
        </div>
        <p className="text-sm text-gray-600 my-6">
          Give your company a faster, more agile way to work with freelancers and
          contractors. Find contract and pay your external workforce in one click,
          with 100% compliance.
        </p>
      </div>
    </div>
  );
};

export default Card;





