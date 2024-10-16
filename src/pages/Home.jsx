import React from 'react'
import Header from '../components/Header'
import Git from '../components/Git'
import Img from '../components/Img'
import That from '../components/That'
import Hiring from '../components/Hiring'
import Hiring1 from '../components/Hiring1'
import Hiring2 from '../components/Hiring2'
import That1 from '../components/That1'
import Section from '../components/Section'
import Card from '../components/Card'
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from "react-icons/io";
import Footer from '../components/Footer'


const Home = () => {
    return (
        <>
            <Header />
            <Git />
            <Img />
            <That />
            <div className="text-center my-12 sm:my-20">
                <h1 className="sm:text-4xl text-2xl font-bold">Everything You Need To Get Ahead</h1>
                <div className="flex justify-center items-center mt-2">
                    <div className="sm:w-1/3 w-1/2 border-t-2 border-purple-500"></div>
                    <div className="flex space-x-1 ml-2 text-purple-500">
                        <span className="w-2 h-2 rounded-full bg-current"></span>
                        <span className="w-2 h-2 rounded-full bg-current"></span>
                        <span className="w-2 h-2 rounded-full bg-current"></span>
                    </div>
                </div>
            </div>
            <Hiring />
            <Hiring1 />
            <Hiring2 />
            <That1 />
            <Section />
            <div className="text-center my-12 sm:my-20">
                <h1 className="sm:text-4xl text-2xl font-bold">Don t just take our word for it..</h1>
                <div className="flex justify-center items-center mt-2">
                    <div className="sm:w-1/3 w-1/2 border-t-2 border-purple-500"></div>
                    <div className="flex space-x-1 ml-2 text-purple-500">
                        <span className="w-2 h-2 rounded-full bg-current"></span>
                        <span className="w-2 h-2 rounded-full bg-current"></span>
                        <span className="w-2 h-2 rounded-full bg-current"></span>
                    </div>
                </div>
            </div>
            <div className=' justify-between p-10 hidden sm:flex'>
            <IoIosArrowBack size={50} />
            <IoIosArrowForward size={50} />
            </div>
            <div className="sm:flex sm:flex-wrap sm:justify-center  w-full h-full sm:items-center sm:p-4 sm:space-x-5">
                <Card />
                <Card />
                <Card /> 
           </div>
           <That1 />
           <Footer/>
        </>
    )
}

export default Home