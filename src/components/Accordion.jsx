import React, { useState } from 'react';
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";


const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        className="flex justify-between w-full p-4 font-semibold focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className="text-xl">{isOpen ? <FaCircleMinus className='text-purple-700' /> : <FaCirclePlus  className='text-purple-700' />}</span>
      </button>
      {isOpen && (
        <div className="p-4 text-gray-700">
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
