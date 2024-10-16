import React from 'react'
import m2 from '../assets/pictures/m2.webp'


const Goal = () => {
    const goalData = [

        {

            intro: "Our Mission",
            desc: "Lorem ipsum dolor sit amet consectetur. At leo ornare sagittis volutpat feugiat volutpat nisl bibendum. Ac faucibus enim justo tellus bibendum venenatis vel. Elementum pelletesque dictum viverra tempor. Odio pellentesque viverra fringilla eleifend laoreet commodo odio elementum et. Massa a quis facilisi morbi at sit consequat. Feugiat gravida justo massa et hac. Varius sed orci tortor et nibh. Pretium leo donec tortor nibh non pretium fringilla arcu. Nunc quis velit lacus sit."
        }
    ]
    return (
        <>
            <div className='sm:mb-40 ' >
                {goalData.map((item, index) => (
                    <div key={index} className='grid grid-cols-1 gap-10 md:grid-cols-2  sm:p-12'>
                         {/* <div className='sm:hidden h-[500px]'>
                            <img src={m2} alt='m1' className='sm:h-[500px] w-full  ' />
                        </div> */}
                        
                        <div>
                            {/* <h1 className='text-5xl font-semibold mb-20'>{item.intro}</h1> */}
                            <div className=" my-5 sm:mb-20 ">
                                <h1 className="sm:text-5xl sm:justify-start sm:items-start flex justify-center items-center  text-2xl font-semibold">Our Goals</h1>
                                <div className="flex  mt-2 justify-center items-center sm:justify-start sm:items-start">
                                    <div className=" ml-12 sm:w-32 w-1/2 border-t-2 border-purple-500"></div>
                                    <div className="flex space-x-2 ml-2 text-purple-500">
                                        <span className="w-2 h-2 rounded-full bg-current"></span>
                                        <span className="w-2 h-2 rounded-full bg-current"></span>
                                        <span className="w-2 h-2 rounded-full bg-current"></span>
                                    </div>
                                </div>
                            </div>
                            <p className='sm:text-2xl text-lg px-3 sm:tracking-wider'>{item.desc}</p>
                        </div>
                        <div className=' sm:flex'>
                            <img src={m2} alt='m1' className=' duration-500 ease-in-out sm:mb-0 mb-12 transform hover:-translate-y-1 hover:scale-105 sm:h-[500px] w-full ' />
                        </div>
                    </div>

                ))}

            </div>
        </>
    )
}

export default Goal




