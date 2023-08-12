import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Mongo from '../assets/mongo.png';
import GitHub from '../assets/github.png';
import CPP from '../assets/cpp.png';
import SQL from '../assets/sql.png';
import MUI from '../assets/mui2.png';
import TailCSS from '../assets/tcss.png';

function Skills() {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* container   */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-2 py-[60px]'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
          <p className='py-4'><p>{"< "}Following are few technologies I've worked with{" />"}</p></p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#eb8f59] hover:scale-110 duration-450'>
            <img className='w-[60px] mx-auto' src={HTML} alt='html icon' />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#5292e6] hover:scale-110 duration-450'>
            <img className='w-[60px] mx-auto' src={CSS} alt='html icon' />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#d0dc66] hover:scale-110 duration-450'>
            <img className='w-[60px] mx-auto' src={Javascript} alt='html icon' />
            <p className='my-4'>Javascript</p>
          </div>
          <div className='shadow-md shadow-[#5d97db] hover:scale-110 duration-450'>
            <img className='w-[60px] mx-auto' src={ReactImg} alt='html icon' />
            <p className='my-4'>React JS</p>
          </div>
          <div className='shadow-md shadow-[#7ce371] hover:scale-110 duration-450'>
            <img className='w-[60px] mx-auto' src={Node} alt='html icon' />
            <p className='my-4'>Node JS </p>
          </div>
          <div className='shadow-md shadow-[#b4ccb9] hover:scale-110 duration-450'>
            <img className='w-[60px] mx-auto' src={Mongo} alt='html icon' />
            <p className='my-4'>Mongo DB</p>
          </div>
          <div className='shadow-md shadow-[#497ca9] hover:scale-110 duration-450'>
            <img className='w-[60px] mx-auto' src={TailCSS} alt='html icon' />
            <p className='my-4'>Tailwind CSS</p>
          </div>
          <div className='shadow-md shadow-[#5170bd] hover:scale-110 duration-450'>
            <img className='w-[60px] mx-auto' src={MUI} alt='html icon' />
            <p className='my-4'>Material UI</p>
          </div>
          <div className='shadow-md shadow-[#497fa3] hover:scale-110 duration-450'>
            <img className='w-[60px] mx-auto' src={CPP} alt='html icon' />
            <p className='my-4'>C++</p>
          </div>
          <div className='shadow-md shadow-[#a6784a] hover:scale-110 duration-450'>
            <img className='w-[60px] mx-auto' src={SQL} alt='html icon' />
            <p className='my-4'>SQL</p>
          </div>
          <div className='shadow-md shadow-[#9f82a4] hover:scale-110 duration-450'>
            <img className='w-[60px] mx-auto' src={GitHub} alt='html icon' />
            <p className='my-4'>GitHub</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills 
