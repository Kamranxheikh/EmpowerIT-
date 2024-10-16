// import React from 'react'
// import Rectangle37 from '../assets/pictures/Rectangle37.png';
// import { Link } from 'react-router-dom';

// const Header3 = () => {
//   return (
//     <div className=' bg-black h-[85vh] sm:h-[110vh]     '>
//     <img className=' md:h-[110vh] h-[85vh] w-[80%] md:w-[60%]  absolute right-0 top-0
//       duration-500 ease-in-out sm:mb-0 mb-12 transform hover:-translate-y-1 hover:scale-105 ' 
//       src={Rectangle37} alt="" />

//     <div className=' bg-black md:py-6 md:px-9 bg-opacity-5 relative flex justify-between items-center text-white  '>
//         <div>
//             <h1 className=' my-2 mx-3 text-xl font-bold'>YOUR LOGO</h1>
//         </div>
//         <div className='space-x-10 text-sm hidden sm:flex md:flex'>
//             <Link to="/">HOME</Link>
//             <Link to="/about">ABOUT</Link>
//             <Link to="/services">SERVICES</Link>
//             <Link to="/webdev">WEB DEVELOPEMENT</Link>
//         </div>
//         <div className='space-x-10 hidden md:flex'>
//             <a href="">LOGIN</a>
//             <a href="">SIGNUP</a>
//         </div>
//     </div>
//     <div className='bg-opacity-5 text-white'>
//         <h1 className='md:pt-16 md:px-16   md:tracking-wider  text-center 
//         md:text-left md:text-8xl text-2xl py-10 sm:py-0 font-bold  bg-opacity-5 relative'>WEB <br /> DEVELOPEMENT
//              <br /> <span className='md:pl-72  sm:pl-0 sm:justify-left  justify-center items-center'></span>
//         </h1>
//         <p className=' md:px-16 md:text-lg py-10 md:py-0 px-3  text-sm md:tracking-widest  bg-opacity-5 relative md:w-[75%]'>
//         Delivering cutting-edge digital solutions tailored to your business needs

//         </p>
//         <div className='flex pt-10 md:space-x-12 space-x-2 justify-center items-center md:w-[65%] bg-opacity-5 relative '>
//             <button className=' md:tracking-wider   bg-violet-500 border-2 border-violet-500 py-2 md:py-3 px-3 md:px-8 text-white  mt-10'>BOOK A DEMO</button>
//             <button className=' border-2 border-white  py-2  md:py-3 px-1 md:px-6 text-white  mt-10'>REQUEST A QUOTE</button>
//         </div>
//     </div>

// </div>


//   )
// }

// export default Header3








import React, { useState } from 'react';
import Rectangle37 from '../assets/pictures/Rectangle37.png';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header3 = () => {
  const navItems = [
      { label: 'HOME', href: '/' },
      { label: 'ABOUT', href: '/about' },
      { label: 'SERVICES', href: '/services' },
      { label: 'WEB DEVELOPMENT', href: '/webdev' },
  ];

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleMenu = () => {
      setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <div className='bg-black h-[90vh] sm:h-[110vh]'>
      <img 
          className='md:h-[110vh] h-[90vh] w-[80%] md:w-[60%] absolute right-0 top-0
          duration-500 ease-in-out sm:mb-0 mb-12 transform hover:-translate-y-1 hover:scale-105' 
          src={Rectangle37} 
          alt="" 
      />

      <div className='bg-black md:py-6 md:px-9 bg-opacity-5 relative flex justify-between items-center text-white'>
        <div>
          <h1 className='my-2 mx-3 text-xl font-bold'>YOUR LOGO</h1>
        </div>
        <div className='lg:hidden md:flex flex-col justify-end'>
          <button 
              onClick={toggleMenu} 
              className='flex items-center justify-center w-10 h-10 rounded-full bg-neutral-700/80 hover:bg-neutral-700/90'
          >
            {mobileDrawerOpen ? <X /> : <Menu />}
          </button>
        </div>
        <div className='space-x-10 text-sm hidden sm:flex md:flex'>
          {navItems.map((item, index) => (
              <Link className='hover:underline' key={index} to={item.href}>{item.label}</Link>
          ))}
        </div>
        <div className='space-x-10 hidden md:flex'>
          <a href="">LOGIN</a>
          <a href="">SIGNUP</a>
        </div>
      </div>

      {mobileDrawerOpen && (
          <div className='fixed right-0 z-20 text-white bg-neutral-900 w-full py-12 flex flex-col justify-center items-center lg:hidden'>
              <ul className='space-y-4'>
                  {navItems.map((item, index) => (
                      <li key={index} className=''>
                          <Link to={item.href} className='hover:underline flex justify-center items-center'>{item.label}</Link>
                      </li>
                  ))}
              </ul>
              <div className='flex space-x-6 pt-4'>
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
          <h1 className='md:pt-16 md:px-16 md:tracking-wider text-center 
          md:text-left md:text-8xl text-2xl py-16 sm:py-0 font-bold bg-opacity-5 relative'>
              WEB <br /> DEVELOPMENT
              <br />
              <span className='md:pl-72 sm:pl-0 sm:justify-left justify-center items-center'></span>
          </h1>
          <p className='md:px-16 md:text-lg py-10 md:py-0 px-3 text-sm md:tracking-widest bg-opacity-5 relative md:w-[75%]'>
              Delivering cutting-edge digital solutions tailored to your business needs
              Delivering cutting-edge digital solutions tailored to your business needs

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
  );
};

export default Header3;
