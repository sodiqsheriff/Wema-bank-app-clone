
import Bank from '../assets/Logo.png'

const Navbar = () => {

   

    return (


<div className="max-w-1200 ml-auto mr-auto pb-16 ">
{/* Nav-bar setion */}
<div className="md:flex justify-between items-center text px-20  ">

  
 <div className='md:flex gap-14 items-center '>
  <div>
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

<select name="" id="" className='text-gray-400 text-sm'>
<option value="">Features</option>
</select>
</div>

<select name="" id="" className='text-gray-400 text-sm'>
<option value=""  >ALAT life</option>
</select>

<div>
<select name="" id="" className='text-gray-400 text-sm'>
<option value=""  >Help</option>
</select>
</div>

<div>
<select name="" id="" className='text-gray-400 text-sm'>
<option value=""  className='text-gray-400 text-sm border-0 outline-0'>Developer</option>
</select>
</div>

</div>

<div className="flex justify-left items-center gap-4">
<button className='shadow-2xl text-sm  text-pink-700 px-5 py-2 rounded font-semi-bold'>Log in</button>
<button className='bg-pink-700 text-sm font-semi-bold text-white px-3 py-2 rounded'>SignUp</button>
</div>

</div>


</div>
    )
}

export default Navbar