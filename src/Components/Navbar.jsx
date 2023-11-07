import React, { useState } from 'react';
import Bank from '../assets/Logo.png'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
   

    return (


<div className="flex justify-between md:flex font-jakarta md:justify-center px-4 space-x-3 mx-auto w-full" >
{/* Nav-bar setion */}


  
 <div className='md:hidden lg:hidden'>
  <img src={Bank} alt="Bank" />
  </div>
 
  
   <div className='hidden md:flex justify-between items-center pb-16 lg:justify-between lg:gap-60 '>
 <div className="container md:flex items-center md:justify-between space-x-0 md:gap-16 lg:space-x-10  ">

 <div className='w-100'>
  <img src={Bank} alt="Bank" />
  </div>
<div className='flex space-x-12 lg:space-x-8'>
<div>
<a href="/" className='text-gray-400 text-sm'>Personal</a>
</div>
<div>
<a href="/"  className='text-gray-400 text-sm'>Business</a>
</div>
<div>
<a href="/"  className='text-gray-400 text-sm'>About</a>
</div>
<div>
  <a href="/" className='text-gray-400 text-sm'>Features</a>
</div>
<div>
  <a href="/" className='text-gray-400 text-sm'>ALATlife</a>
</div>
<div>
  <a href="/" className='text-gray-400 text-sm'>Help</a>
</div>
<div>
  <a href="/" className='text-gray-400 text-sm'>Developer</a>
</div>
</div>
</div>

<div className="gap-2 md:flex justify-self md:pl-8 items-center md:gap-4">
<button className='shadow-2xl text-sm  text-pink-700 px-5 py-2 rounded font-semi-bold'>Login</button>
<button className='bg-pink-700 text-sm font-semi-bold text-white px-3 py-2 rounded'>SignUp</button>

</div>



</div>
  
  <div className=' p-4  items-center  md:hidden '>
      <div className="md:text-4xl" onClick={toggleMenu}>
        {isMenuOpen ? (
          // Display the exit icon when the menu is open
         <MdOutlineClose className="text-2xl md:text-5xl relative  top-0 right-0 text-white cursor-pointer lg:hidden "/>
        ) : (
          // Display the menu icon when the menu is closed
          <GiHamburgerMenu className="text-3xl md:text-5xl cursor-pointer lg:hidden"/>
        )}
      </div>

      {isMenuOpen  && (
        
 <div className=" bg-white w-full h-screen p-0 m-0  text-gray-600 absolute top-0 left-0 z-50 overflow-y-hidden shadow-2xl py-10 space-y-6 capitalize ps-5">
              <MdOutlineClose onClick={toggleMenu} className="text-2xl md:text-5xl md:w-20 absolute text-black top-0 right-0 w-16 h-24  pr-5 cursor-pointer  lg:hidden "/>
            
                <div className=" hover:translate-y-1">
                    <a href="/">personal</a>
                </div>
                
                <div className=" hover:translate-y-1">
                    <a href="/">business</a>
                </div>
                <div className=" hover:translate-y-1">
                    <a href="/">about</a>
                </div>
                <div className=" hover:translate-y-1">
                    <a href="/">features</a>
                </div>
                <div className=" hover:translate-y-1">
                    <a href="/">Alat life</a>
                </div>
                <div className=" hover:translate-y-1">
                    <a href="/">help</a>
                </div>
                <div className=" hover:translate-y-1 ">
                    <a href="/">developer</a>
                </div>

                <div className="flex gap-4 text-sm lg:hidden">
                    <a href="" className="px-3 py-2 border-2 border-gray-500 text-gray-500 rounded capitalize  hover:translate-y-1">login</a>
                    <a href="" className="bg-pink-800 px-3 py-2 text-center text-white border-2-gray-500 capitalize rounded semi-bold hover:opacity-50 hover:translate-y-1">sign up</a>
                </div>
        </div>

      )}
    </div>










</div>

    );
};

export default Navbar;