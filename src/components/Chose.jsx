import React from 'react'

const Chose = () => {
    const choseData = [
        {
            head: "Customer-Centric Approach",
            desc: "Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed.Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed",
        },
        {
            head: "Innovation",
            desc: "Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed.Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed",
        },
        {
            head: "Reliability",
            desc: "Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed.Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed",

        }
    ]
    return (
        <>
            <div className='sm:h-[90vh] h-[190vh] mb-28 bg-black text-white'>
                <div className=" my-5 sm:mb-20 ">
                    <h1 className="sm:text-5xl sm:justify-center sm:items-center flex justify-center items-center  text-2xl font-semibold pt-8">Why You Chose Us</h1>
                    <div className="flex  mt-2 justify-center items-center sm:justify-center sm:items-center">
                        <div className="sm:w-60 w-1/2 border-t-2 border-purple-500"></div>
                        <div className="flex justify-center items-center space-x-2 ml-2 text-purple-500">
                            <span className="w-2 h-2 rounded-full bg-current"></span>
                            <span className="w-2 h-2 rounded-full bg-current"></span>
                            <span className="w-2 h-2 rounded-full bg-current"></span>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-12 justify-around'>
                    {choseData.map((item, index) => (
                        <div key={index} className='bg-white  shadow-lg p-7 space-y-5 h-[320px] sm:h-[250px] w-full'>
                            <h1 className='text-black text-center font-bold text-lg'>{item.head}</h1>
                            <p className='text-gray-600 text-center mx-2 py-3'>{item.desc}</p>

                        </div>
                    ))}

                </div>

            </div>

        </>
    )
}

export default Chose