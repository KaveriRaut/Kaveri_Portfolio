import React from 'react'
import WorkImg from '../assets/workImg.jpeg';
import WorkImg2 from '../assets/realestate.jpg';
import P1 from '../assets/project.jpg';
import P2 from '../assets/project2.png';
import P3 from '../assets/project3.png';
import P4 from '../assets/project7.png';
import P5 from '../assets/project5.png';
import P6 from '../assets/project6.jpg';

function Work() {
    return (
        // name is given to each section for smooth scroll feature adding
        // anything above medium md-breakpoint we wanna disply h-screen view
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f] '>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
                <div className='pb-8 py-[100px]'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Projects</p>
                    <p className='py-6'><p>{"< "}Check out some of my recent projects{" />"}</p></p>
                </div>

                {/* {// container //} container of all boxes cards */}
                {/* anything over the small (sm: ) change it to grid-col-2 view */}
                {/* anything over the medium (md: ) change it to grid-col-3 view with gap-4 */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    
                    {/* this is {//grid-item//} card-container of each project */}
                    {/* content-div is the class name given by us to apply our own defined styling in index.css */}
                    
                    {/* 1st grid-item */}
                    <div style={{ backgroundImage: `url(${P1})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-105 duration-500'>

                        {/* Hover Effect */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <p className='text-2xl font-bold text-white tracking-wider'>
                                Netflix Clone 2.0
                            </p>
                            <span className='text-1xl font-bold text-white tracking-wider'>
                                MERN Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/KaveriRaut/Netflix2.0_Clone'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>{"< "}Code{"/>"}</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* 2nd grid item */}
                    <div style={{ backgroundImage: `url(${P5})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-105 duration-500'>

                        {/* Hover Effect */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <p className='text-2xl font-bold text-white tracking-wider'>
                                Saksham Gram Mahila 
                            </p>
                            <span className='text-1xl font-bold text-white tracking-wider'>
                                Hackathon : MERN Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/KaveriRaut/TechForGood-Hackathon'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>{"< "}Code{"/>"}</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* repeat the same above 2-grid items twice below */}
                    {/* 1st grid-item */}
                    <div style={{ backgroundImage: `url(${P3})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-105 duration-500'>

                        {/* Hover Effect */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <p className='text-2xl font-bold text-white tracking-wider'>
                                Weather Application
                            </p>
                            <span className='text-1xl font-bold text-white tracking-wider'>
                                API Based Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/KaveriRaut/Weather-App'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>{"< "}Code{"/>"}</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* 2nd grid item */}
                    <div style={{ backgroundImage: `url(${P4})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-105 duration-500'>

                        {/* Hover Effect */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <p className='text-2xl font-bold text-white tracking-wider'>
                               Secret Keeper App
                            </p>
                            <span className='text-1xl font-bold text-white tracking-wider'>
                                MERN Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/KaveriRaut/MERN_App'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>{"< "}Code{"/>"}</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                     {/* 2nd grid item */}
                    <div style={{ backgroundImage: `url(${P2})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-105 duration-500'>

                        {/* Hover Effect */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <p className='text-2xl font-bold text-white tracking-wider'>
                                PICT Harmony 
                            </p>
                            <span className='text-1xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/KaveriRaut/PBL_Project_PICT-Harmony'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>{"< "}Code{"/>"}</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* 2nd grid item */}
                    <div style={{ backgroundImage: `url(${P6})` }} className='shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-105 duration-500'>

                        {/* Hover Effect */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                To Do List
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/KaveriRaut/ToDoList'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>{"< "}Code{"/>"}</button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Work
