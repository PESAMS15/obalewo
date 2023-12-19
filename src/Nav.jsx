import React from 'react'
import logo from "./Assets/logo.webp"
import { Link, useNavigate } from 'react-router-dom';

// import  {Link}  from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <div className="flex md:justify-between justify-center items-center md:h-20  bg-orange-500 md:p-3">
          <div className="flex gap-5 items-center">
          <div>
            <img src={logo} className='h-20' alt="" />
            <p className='mt-2 font-bold px-1 shadow-lg text-xl hidden md:block text-green-400'>O'BELAWO</p>
            </div>
            <Link to="/"><p className='text-green-700  transition-all cursor-pointer font-semibold hidden md:block hover:text-white text-lg'>Home</p></Link>
          </div>
          
            <Link to="/about"><p className='text-green-700  transition-all cursor-pointer font-semibold hidden md:block hover:text-white text-lg'>ABOUT</p></Link>
            <Link to="/menu"><p className='text-green-700  transition-all cursor-pointer font-semibold hidden md:block hover:text-white text-lg'>MENU</p></Link>
            <Link to="/online-ordering">            <p className='text-green-700  transition-all cursor-pointer font-semibold hidden md:block hover:text-white text-lg'>Online Ordering</p></Link>
            <Link to="/contact"><p className='text-green-700  transition-all cursor-pointer font-semibold hidden md:block hover:text-white text-lg'>Contact</p></Link>

        </div>
    </div>
  )
}

export default Nav