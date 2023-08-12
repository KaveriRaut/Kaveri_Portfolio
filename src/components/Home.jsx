import React from 'react'
import P1 from '../assets/bg8.jpg'
import { HiArrowNarrowRight } from 'react-icons/hi'
// Typed is library for dynamic naming of profiles
import Typed from 'react-typed';
import CV from '../../src/assets/T31269_Kaveri_Resume.pdf';

function Home() {
    return (
        <div style={{ backgroundImage: `url(${P1})`  }} name='home' className='w-full h-screen bg-[#0a192f] bg-cover bg-blend-overlay' >
        {/* // <div class="bg-cover bg-center " style="background-image: url(P1)" > */}

            {/* container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600 font-bold text-2xl'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Kaveri Raut</h1>
                <h2 className='text-4xl sm:text-5xl font-bold text-[#c0ccf3]'>
                    I'm a&nbsp;
                    <Typed className='text-4xl sm:text-5xl font-bold text-pink-600' strings={[ "Computer Engineer"," Programmer", " Student"," Web Developer"]} typeSpeed={70} backSpeed={60} loop ></Typed>
                </h2>
                
                <p className='text-[#ccd6f6]  py-4 max-w-[700px] '>I'm a computer engineering student interested in web development and Data Structures & Algorithms. I'm familiar with frontend and backend technologies. I love to read books and developing beautiful websites. Currently, I'm exploring new technologies.</p>
                <div >
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href={CV} download>Download CV</a>
                        <span className='group-hover:rotate-90 duration-300'>
                         <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
