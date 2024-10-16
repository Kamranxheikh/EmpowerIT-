import React from 'react';
import Accordion from './Accordion';

const accordionData = [
  { title: 'Lorem ipsum dolor sit amet', content: 'Lorem ipsum dolor sit amet consectetur. Libero viverra non volutpat pretium placerat platea viverra...' },
  { title: 'Lorem ipsum dolor sit amet consectetur.', content: 'Lorem ipsum dolor sit amet consectetur. Dignissim varius id...' },
  { title: 'Lorem ipsum dolor sit amet consectetur. Blandit leo et lectus curabitur aliquam.', content: 'Lorem ipsum dolor sit amet consectetur. Auctor vel phasellus eget consectetur...' },
  { title: 'Lorem ipsum dolor sit amet consectetur. Sed id tellus.', content: 'Lorem ipsum dolor sit amet consectetur. Sed id tellus in...' },
  { title: 'Lorem ipsum dolor sit amet', content: 'Lorem ipsum dolor sit amet consectetur. Libero viverra non volutpat pretium placerat platea viverra...' },
  { title: 'Lorem ipsum dolor sit amet', content: 'Lorem ipsum dolor sit amet consectetur. Libero viverra non volutpat pretium placerat platea viverra...' },


];
const AccordionList = () => {
  return (
    <>
     <div className="text-center  my-12 sm:my-20 ">
        <h1 className="sm:text-5xl text-2xl font-semibold">FAQ's </h1>
        <div className="flex justify-center  items-center mt-2">
          <div className="sm:w-12  w-5 border-t-2 border-purple-500 sm:ml-12"></div>
          <div className="flex space-x-1 ml-2 text-purple-500 sm:pr-12">
            <span className="w-2 h-2 rounded-full bg-current"></span>
            <span className="w-2 h-2 rounded-full bg-current"></span>
            <span className="w-2 h-2 rounded-full bg-current"></span>
          </div>
        </div>
      </div>
    <div className="max-w-4xl mx-auto mt-8 mb-10 space-y-6 text-sm sm:text-xl">
      {accordionData.map((item, index) => (
        <Accordion key={index} title={item.title} content={item.content} />
      ))}
    </div>
    </>
  );
};

export default AccordionList;
