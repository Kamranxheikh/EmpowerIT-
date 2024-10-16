import React from 'react'
import t from '../assets/pictures/t.png'
import u from '../assets/pictures/u.png'
import v from '../assets/pictures/v.png'




const Offering = () => {
    const offeringData = [
        {
            image:t,
            intro:"Business Planning"
        },
        {
            image:u,
            intro:"UI/UX Design"
        },
        {
            image:v,
            intro:"Web Development"
        },
        {
            image:t,
            intro:"Business Planning"
        },
        {
            image:u,
            intro:"UI/UX Design"
        },
        {
            image:v,
            intro:"Web Development"
        },
        {
            image:t,
            intro:"Business Planning"
        },
        {
            image:u,
            intro:"UI/UX Design"
        },
        {
            image:v,
            intro:"Web Development"
        },    
    ]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-12 justify-around'>
        {offeringData.map((offer, index) => (
            <div key={index} className='flex flex-col items-center justify-center'>
                <img src={offer.image} alt='offering' className='w-[350px] h-[380px] mb-5 duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105' />
                <h3 className='text-center text-xl font-bold'>{offer.intro}</h3>
            </div>
        ))}

    </div>
  )
}

export default Offering