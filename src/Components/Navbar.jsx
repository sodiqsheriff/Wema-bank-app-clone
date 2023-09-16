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


  
 
  <div className='pr-7'>
  <img src={Bank} alt="Bank" />
  </div>

   <div className='hidden md:flex justify-between items-center gap-52  '>
 <div className="flex gap-16">
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
  <a href="/" className='text-gray-400 text-sm'>ALAT life</a>
</div>
<div>
  <a href="/" className='text-gray-400 text-sm'>Help</a>
</div>
<div>
  <a href="/" className='text-gray-400 text-sm'>Developer</a>
</div>
</div>

<div className="flex justify-self items-center gap-4">
<button className='shadow-2xl text-sm  text-pink-700 px-5 py-2 rounded font-semi-bold'>Log in</button>
<button className='bg-pink-700 text-sm font-semi-bold text-white px-3 py-2 rounded'>SignUp</button>

</div>



</div>
  
  <div className='flex flex-col p-4 items-center shadow-inner  md:hidden '>
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
        
  <div className='block  py-5 px-5  md:hidden  '>
  
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