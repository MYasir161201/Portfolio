import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import {FaBars,FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link} from 'react-scroll'

const Navbar = () => {
  const [toggle,setToggle]=useState(false)
  const handleClick=()=>(setToggle(!toggle))

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
       <img className='w-[50px] rounded ' src={Logo} alt='Logo img' />
      </div>

       { /*menu items */}
      
        <ul className='hidden md:flex '>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li><Link to="work" smooth={true} duration={500}>Work</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
  

       {/* hamburger */}
       <div onClick={handleClick} className='md:hidden z-10'>
        {!toggle?<FaBars /> : <FaTimes />}
       </div>

       {/* mobile menu */}
       <ul className={!toggle?'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills"  smooth={true} duration={500}>Skills</Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClick} to="work"  smooth={true} duration={500}>Work</Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>

        {/* social menus */}
        <div className='hidden lg:flex flex-col fixed top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'><a href='https://www.linkedin.com/in/ammar-yasir-a86448203/' className='flex justify-between items-center w-full text-gray-300'>LinkedIn<FaLinkedin size={30} /></a></li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'><a href='https://github.com/MYasir161201' className='flex justify-between items-center w-full text-gray-300'>GitHub<FaGithub size={30} /></a></li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600'><a href='ammar.yasir161201@gmail.com' className='flex justify-between items-center w-full text-gray-300'>Email<HiOutlineMail size={30} /></a></li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'><a href='/' className='flex justify-between items-center w-full text-gray-300'>Resume<BsFillPersonLinesFill size={30} /></a></li>
          </ul>
        </div>
       
    </div>
  )
}

export default Navbar
