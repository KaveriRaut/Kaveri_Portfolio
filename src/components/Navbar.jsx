import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/lg.png'
import CV from '../../src/assets/T31269_Kaveri_Resume.pdf';

import { Link } from 'react-scroll';

function Navbar() {

  // this is to toggle the navbar menu=>hamburgur menu show and not show
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 '>
      <div>
        <Link to="home" smooth={true} duration={500} className='  hover:text-pink-600  hover:cursor-pointer'> <img src={Logo} style={{ width: '200px' }} /> </Link>
      </div>

      {/* menu */}
      {/* anything above the medium 168px will be displayed here in navbar for laptop view*/}
      <ul className='hidden md:flex'>
        <li >
          {/* using to='{name} given for each component' for smooth scroll */}
          <Link to="home" smooth={true} duration={500} className='  hover:text-pink-600  '> Home </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} className=' hover:text-pink-600 '> About </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} className='  hover:text-pink-600  '> Skills </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500} className='  hover:text-pink-600 '> Projects </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} className='  hover:text-pink-600  '> Contact </Link>
        </li>
      </ul>


      {/* Hamburgur */}
      <div onClick={handleClick} className='md:hidden z-10'> {/* anything greater than medium it will hide*/}
        {!nav ? <FaBars /> : <FaTimes />}  {/* 3bars if nav value true else cross sign in hamburgur menu dropdown */}
      </div>

      {/* Mobile menu */}
      {/* here used ternary operator to toggle te hamburgur menu show or not show*/}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center '}>
        {/* <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li> */}
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="home" smooth={true} duration={500} > Home </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="about" smooth={true} duration={500}> About </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}> Skills </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="work" smooth={true} duration={500}> Projects </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}> Contact </Link>
        </li>
      </ul>

      {/* Social icons */}
      {/* anything over the large breakpoint(124px) display as flex */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/rautkaveri126//">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/KaveriRaut">
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#cda22c]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="mailto:rautkaveri123@gmail.com">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300' href={CV} download>
              Resume Download <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar

