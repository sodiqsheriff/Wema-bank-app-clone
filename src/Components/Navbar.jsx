import React, { useState } from 'react';
import Bank from '../assets/Logo.png'
import menu from '../assets/Menu-icon.png'
import exit from '../assets/Exit-icon.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
   

    return (

<>
<div className="flex justify-between md:flex font-jakarta md:justify-center px-4 space-x-3 mx-auto w-full" >
{/* Nav-bar setion */}


  
 <div className='md:hidden lg:hidden'>
  <img src={Bank} alt="Bank" />
  </div>
 
  
   <div className='hidden md:flex justify-between items-center gap-28 lg:justify-between lg:gap-60 '>
 <div className="container md:flex items-center justify-between space-x-10  ">

 <div className='w-100'>
  <img src={Bank} alt="Bank" />
  </div>

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

<div className="gap-2 md:flex justify-self items-center md:gap-4">
<button className='shadow-2xl text-sm  text-pink-700 px-5 py-2 rounded font-semi-bold'>Login</button>
<button className='bg-pink-700 text-sm font-semi-bold text-white px-3 py-2 rounded'>SignUp</button>

</div>



</div>
  
  <div className=' p-4  items-center  md:hidden '>
      <div className=" " onClick={toggleMenu}>
        {isMenuOpen ? (
          // Display the exit icon when the menu is open
          <img src={exit} alt="Exit" className='p-4' />
        ) : (
          // Display the menu icon when the menu is closed
          <img src={menu} alt="Menu" />
        )}
      </div>

      {isMenuOpen  && (
        
  
  <div className='block p-6 bg-opacity-10 m-auto   shadow-2xl  py-5   md:hidden  '>
  
<div>
<a href="/" className='hover:underline hover:font-semibold text-gray-400 text-sm'>Personal</a>
</div>
<div>
<a href="/"  className='hover:underline hover:font-semibold text-gray-400 text-sm'>Business</a>
</div>
<div>
<a href="/"  className='hover:underline hover:font-semibold text-gray-400 text-sm'>About</a>
</div>
<div>
  <a href="/" className='hover:underline hover:font-semibold text-gray-400 text-sm'>Features</a>
</div>
<div>
  <a href="/" className='hover:underline hover:font-semibold text-gray-400 text-sm'>ALAT life</a>
</div>
<div>
  <a href="/" className='hover:underline hover:font-semibold text-gray-400 text-sm'>Help</a>
</div>
<div>
  <a href="/" className='hover:underline hover:font-semibold text-gray-400 text-sm'>Developer</a>
</div>


<div className="flex justify-self items-center gap-4">
<button className='shadow-2xl text-sm  text-pink-700 px-5 py-2 rounded font-semi-bold hover:bg-pink-800 hover:text-white hover:font-semibold'>Log in</button>
<button className='bg-pink-700 text-sm font-semi-bold text-white px-3 py-2 rounded hover:bg-pink-300 hover:semibold'>SignUp</button>

</div>



</div>

      )}
    </div>










</div>
</>
    )
}

export default Navbar