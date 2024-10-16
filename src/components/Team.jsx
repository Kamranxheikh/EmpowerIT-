import React from 'react'
import Rectangle55 from '../assets/pictures/Rectangle55.png'
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";




const Team = () => {
    const teamData = [

        {
            // image: 'Ractangle55',
            name: 'Member Name',
            company: "Position in Company",
            icon1: <MdFacebook size={35} />,
            icon2: <FaInstagram size={35}/>,
            icon3: <FaLinkedin size={35}/>,
        },
        {
            // image: Ractangle55,
            name: 'Member Name',
            company: "Position in Company",
            icon1: <MdFacebook size={35}/>,
            icon2: <FaInstagram size={35}/>,
            icon3: <FaLinkedin size={35}/>
        },
        {
            // image: Ractangle55,
            name: 'Member Name',
            company: "Position in Company",
            icon1: <MdFacebook size={35} />,
            icon2: <FaInstagram size={35} />,
            icon3: <FaLinkedin size={35} />,
        },
        {
            // image: Ractangle55,
            name: 'Member Name',
            company: "Position in Company",
            icon1: <MdFacebook size={35} />,
            icon2: <FaInstagram size={35} />,
            icon3: <FaLinkedin size={35} />,
        },
    ]

    return (
        <div className='w-full mb-20 h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {teamData.map((item, index) => (
                <div key={index} className='bg-slate-950'>
                    <img src={Rectangle55} alt={item.name} className=' 
                    duration-500 ease-in-out sm:mb-0 mb-12 transform hover:-translate-y-1 hover:scale-105w-full h-52 object-cover rounded-b-lg' />
                    <div className='flex flex-col space-y-6 justify-center items-center py-6 bg-black'>

                        <div className='flex justify-center text-white items-center mt-2'>
                            <h2 className='text-xl font-semibold text-center'>{item.name}</h2>
                        </div>
                        <div className='flex'>
                            <span className='text-gray-400 text-lg'>{item.company}</span>
                        </div>
                        <div className='flex justify-center space-x-4'>
                            <span className=' text-purple-400'>{item.icon1}</span>
                            <span className=' text-purple-400'>{item.icon2}</span>
                            <span className=' text-purple-400'>{item.icon3}</span>
                        </div>

                    </div>


                </div>
            ))}
        </div>
    )
}

export default Team