import React from 'react'

const Process = () => {
    const processData = [
        {
            head: "Discovery ",
            desc: "Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed.Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed",
        },
        {
            head: "Planning",
            desc: "Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed.Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed",
        },
        {
            head: "Execution",
            desc: "Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed.Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed",

        },
        {
            head: "Evaluation",
            desc: "Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed.Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed",

        }
    ]
    return (
        <>
            <div className='sm:h-[100vh] h-[190vh] mb-28 bg-black text-white'>
                <div className=" my-5 sm:mb-20 ">
                    <h1 className="sm:text-5xl sm:justify-center sm:items-center flex justify-center items-center  text-2xl font-semibold pt-8">Our Process</h1>
                    <div className="flex  mt-2 justify-center items-center sm:justify-center sm:items-center">
                        <div className="sm:w-40 w-1/6 border-t-2 border-purple-500"></div>
                        <div className="flex justify-center items-center space-x-2 ml-2 text-purple-500">
                            <span className="w-2 h-2 rounded-full bg-current"></span>
                            <span className="w-2 h-2 rounded-full bg-current"></span>
                            <span className="w-2 h-2 rounded-full bg-current"></span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center text-sm sm:text-lg items-center flex-col sm:flex-row sm:mb-20 mb-5'>
                    <h1>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet</h1>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 p-12  justify-around'>
                    {processData.map((item, index) => (
                        <div key={index} className='bg-white  shadow-lg p-7  h-[230px] sm:h-[230px] w-full'>
                            <h1 className='text-black text-center font-bold text-lg'>{item.head}</h1>
                            <p className='text-gray-600 text-center mx-2 py-3 text-sm'>{item.desc}</p>

                        </div>
                    ))}

                </div>

            </div>

        </>
    )
}

export default Process