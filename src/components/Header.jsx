import React, { useState } from 'react';
import hadr from '../assets/pictures/hadr.png';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'

const Header = () => {
    const navItems = [
        { label: 'HOME', href: '/' },
        { label: 'ABOUT', href: '/about' },
        { label: 'SERVICES', href: '/services' },
        { label: 'WEB DEVELOPMENT', href: '/webdev' },
    ];

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleMenu = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

    return (
        <>
            <div className='bg-black h-[90vh] sm:h-[110vh] '>
                <img
                    className='md:h-[110vh] h-[90vh] w-[80%] md:w-[60%] absolute right-0 top-0'
                    src={hadr}
                    alt="Header"
                />
                <div className='bg-black md:py-6 md:px-9 bg-opacity-5 relative flex justify-between items-center text-white'>
                    <div>
                        <h1 className='my-2 mx-3 text-xl font-bold'>YOUR LOGO</h1>
                    </div>
                    <div className='lg:hidden md:flex flex-col  justify-end'>
                        <button onClick={toggleMenu} className='flex items-center justify-center w-10 h-10 rounded-full bg-neutral-700/80 hover:bg-neutral-700/90'>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                    <div className='space-x-10 text-sm hidden sm:flex  md:flex  '>
                        {navItems.map((item, index) => (
                            <Link className='hover:underline' key={index} to={item.href}>{item.label} </Link>
                        ))}
                        {/* <Link to="/">HOME</Link>
                        <Link to="/about">ABOUT</Link>
                        <Link to="/services">SERVICES</Link>
                        <Link to="/webdev">WEB DEVELOPEMENT</Link> */}
                    </div>

                    <div className='space-x-10 hidden md:flex'>
                        <a href="">LOGIN</a>
                        <a href="">SIGNUP</a>
                    </div>
                </div>

                {mobileDrawerOpen && (
                    <div className='fixed right-0 z-20  text-white bg-neutral-900 w-full  py-12 flex flex-col justify-center items-center lg:hidden'>
                        <ul className='space-y-4 '>
                            {navItems.map((item, index) => (
                                <li key={index} className=''>
                                    <Link to={item.href} className='flex justify-center items-center hover:underline' >{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                        <div className='flex space-x-6 pt-4 '>
                            <button className='md:tracking-wider bg-violet-500 border-2 border-violet-500 py-2 md:py-3 px-3 md:px-8 text-white mt-10'>
                                LOGIN
                            </button>
                            <button className='border-2 border-white py-2 md:py-3 px-1 md:px-6 text-white mt-10'>
                                SIGNUP
                            </button>
                        </div>
                    </div>
                )}

                <div className='bg-opacity-5 text-white'>
                    <h1 className='md:py-20 md:px-16 md:tracking-wider py-16 text-center 
                      md:text-left md:text-5xl text-xl font-bold bg-opacity-5 relative'>
                        Empowering Your Business with IT <br />
                        <span className='md:pl-72 sm:pl-0 sm:justify-left justify-center items-center'>Innovation</span>
                    </h1>
                    <p className='md:px-16 md:text-lg py-8 px-3 text-sm md:tracking-widest text-center bg-opacity-5 relative md:w-[75%]'>
                        We specialize in delivering cutting-edge IT services tailored to meet the unique needs of
                        businesses across industries. Our expert team is dedicated to providing comprehensive
                        solutions that drive efficiency, enhance security, and foster innovation.
                    </p>
                    <div className='flex pt-10 md:space-x-12 space-x-2 justify-center items-center md:w-[65%] bg-opacity-5 relative'>
                        <button className='md:tracking-wider bg-violet-500 border-2 border-violet-500 py-2 md:py-3 px-3 md:px-8 text-white mt-10'>
                            BOOK A DEMO
                        </button>
                        <button className='border-2 border-white py-2 md:py-3 px-1 md:px-6 text-white mt-10'>
                            REQUEST A QUOTE
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;




















// // import React from 'react'
// // import hadr from '../assets/pictures/hadr.png';
// // import { Link } from 'react-router-dom';

// // const header = () => {
// //     return (
// //         <>
// //             <div className=' bg-black h-[85vh] sm:h-[110vh]     '>
// //                 <img className=' md:h-[110vh] h-[85vh] w-[80%] md:w-[60%]  absolute right-0 top-0  ' src={hadr} alt="" />

// //                 <div className=' bg-black md:py-6 md:px-9 bg-opacity-5 relative flex justify-between items-center text-white  '>
// //                     <div>
// //                         <h1 className=' my-2 mx-3 text-xl font-bold'>YOUR LOGO</h1>
// //                     </div>
// //                     <div className='space-x-10 text-sm hidden sm:flex md:flex'>
// //                         <Link to="">HOME</Link>
// //                         <Link to="/about">ABOUT</Link>
// //                         <Link to="/services">SERVICES</Link>
// //                         <Link to="/webdev">WEB DEVELOPEMENT</Link>
// //                     </div>
// //                     <div className='space-x-10 hidden md:flex'>
// //                         <a href="">LOGIN</a>
// //                         <a href="">SIGNUP</a>
// //                     </div>
// //                 </div>
// //                 <div className='bg-opacity-5 text-white'>
// //                     <h1 className='md:py-24 md:px-16   md:tracking-wider py-9 text-center 
// //                     md:text-left md:text-5xl text-xl  font-bold  bg-opacity-5 relative'>
// //                         Empowering Your Business with IT <br /> <span className='md:pl-72  sm:pl-0 sm:justify-left  justify-center items-center'>Innovation</span>
// //                     </h1>
// //                     <p className=' md:px-16 md:text-lg py-5 px-3  text-sm md:tracking-widest text-center bg-opacity-5 relative md:w-[75%]'>
// //                         We specialize in delivering cutting-edge IT services tailored to meet the unique needs of
// //                         businesses across industries. Our expert team is dedicated to providing comprehensive
// //                         solutions that drive efficiency, enhance security, and foster innovation
// //                     </p>
// //                     <div className='flex pt-10 md:space-x-12 space-x-2 justify-center items-center md:w-[65%] bg-opacity-5 relative '>
// //                         <button className=' md:tracking-wider   bg-violet-500 border-2 border-violet-500 py-2 md:py-3 px-3 md:px-8 text-white  mt-10'>BOOK A DEMO</button>
// //                         <button className=' border-2 border-white  py-2  md:py-3 px-1 md:px-6 text-white  mt-10'>REQUEST A QUOTE</button>
// //                     </div>
// //                 </div>

// //             </div>


// //         </>
// //     )
// // }

// // export default header















// import React, { useState } from 'react';
// import hadr from '../assets/pictures/hadr.png';
// import { Link } from 'react-router-dom';
// import { Menu, X } from 'lucide-react'


// const Header = () => {
//     const navItems = [
//         { label: <Link to="">HOME</Link>},
//         { label: <Link to="/about">ABOUT</Link> },
//         { label: <Link to="/services">SERVICES</Link>},
//         { label: <Link to="/webdev">WEB DEVELOPMENT</Link>},
//     ];

//     const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
//     const toggleMenu = () => {
//         setMobileDrawerOpen(!mobileDrawerOpen)
//     }


//     return (
//         <>
//             <div className='bg-black h-[85vh] sm:h-[110vh] '>
//                 <img
//                     className='md:h-[110vh] h-[85vh] w-[80%] md:w-[60%] absolute right-0 top-0'
//                     src={hadr}
//                     alt="Header"
//                 />

//                 <div className='bg-black md:py-6 md:px-9 bg-opacity-5 relative flex justify-between items-center text-white'>
//                     <div>
//                         <h1 className='my-2 mx-3 text-xl font-bold'>YOUR LOGO</h1>
//                     </div>
//                     <div className='sm:hidden'>
//                         {/* <button 
//                             onClick={toggleMenu} 
//                             className='text-white p-2'>
//                             {isMenuOpen ? '×' : '☰'}
//                         </button> */}
//                         <div className="lg:hidden md:flex flex-col justify-end ">
//                             <button onClick={toggleMenu} className=' flex items-center justify-center w-10 h-10 rounded-full bg-neutral-700/80 hover:bg-neutral-700/90'>
//                                 {mobileDrawerOpen ? <X /> : <Menu />}

//                             </button>
//                         </div>
//                     </div>
//                     {mobileDrawerOpen && (
//                         <div className='fixed right-0 z-20 bg-neutral-900 w-full h-full space-y-4 pt-80 flex flex-col justify-center items-center lg:hidden'>
//                             <ul className=''>

//                                 {navItems.map((item, index) => (
//                                     <li key={index} className=''>
//                                         <Link to={item.href} >{item.label}</Link>
//                                     </li>
//                                 ))}
//                             </ul>
//                             <div className='flex space-x-6'>
//                                 <a href="">LOGIN</a>
//                                 <a href="">SIGNUP</a>
//                             </div>
//                         </div>
//                     )}

//                     <div className='space-x-10 text-sm hidden sm:flex md:flex'>
//                         <Link to="">HOME</Link>
//                         <Link to="/about">ABOUT</Link>
//                         <Link to="/services">SERVICES</Link>
//                         <Link to="/webdev">WEB DEVELOPMENT</Link>
//                         <div className='space-x-2 hidden md:flex'>
//                             <a href="">LOGIN</a>
//                             <a href="">SIGNUP</a>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='bg-opacity-5 text-white'>
//                     <h1 className='md:py-24 md:px-16 md:tracking-wider py-9 text-center 
//                       md:text-left md:text-5xl text-xl font-bold bg-opacity-5 relative'>
//                         Empowering Your Business with IT <br />
//                         <span className='md:pl-72 sm:pl-0 sm:justify-left justify-center items-center'>Innovation</span>
//                     </h1>
//                     <p className='md:px-16 md:text-lg py-5 px-3 text-sm md:tracking-widest text-center bg-opacity-5 relative md:w-[75%]'>
//                         We specialize in delivering cutting-edge IT services tailored to meet the unique needs of
//                         businesses across industries. Our expert team is dedicated to providing comprehensive
//                         solutions that drive efficiency, enhance security, and foster innovation.
//                     </p>
//                     <div className='flex pt-10 md:space-x-12 space-x-2 justify-center items-center md:w-[65%] bg-opacity-5 relative'>
//                         <button className='md:tracking-wider bg-violet-500 border-2 border-violet-500 py-2 md:py-3 px-3 md:px-8 text-white mt-10'>
//                             BOOK A DEMO
//                         </button>
//                         <button className='border-2 border-white py-2 md:py-3 px-1 md:px-6 text-white mt-10'>
//                             REQUEST A QUOTE
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Header;
