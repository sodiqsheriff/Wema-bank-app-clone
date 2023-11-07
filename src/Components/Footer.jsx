
import wema from '../assets/wema-logo.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import linkedln from '../assets/linkedin-icon.png'
import instagram from '../assets/insta-icon.png'
{/* footer section */}



const Footer =()=>{
    return(
     
        <>
    <div className="px-5 space-y-0 md:flex justify-between  md:px-8 w-full mb-10  gap-40 items-center lg:px-20">

    <div>
    <h1 className="md:flex items-center text-xs font-semi-bold">
    We'd love to let you know our products,
    ALAT news and offers via Email
    </h1>
    </div>

    <div className="md:flex items-center  gap-5 ">
    <div className='text-sm'>
    <input type="text" placeholder='Enter your Email' className='w-60 h-6 px-1 py-3 border-2 border-gray-300 rounded' />
    </div>
    <div>
    <button className="px-4 py-2 m-2  rounded text-sm text-white bg-pink-900">Subscribe</button>
    </div>
    </div>
    </div>

<div className="grid grid-cols-2 px-5 mb-0 md:flex justify-evenly w-full md:px-8 text-xs gap-10 md:mb-16 lg:flex lg:px-0">

<div className='pb-0 md:pb-4'>
<h1 className="text-pink-800 font-bold pb-2">Company</h1>
<div className='leading-7'>
<h6><a href="/" className='text-gray-700  capitalize'>about alat</a></h6>
<h6><a href="/" className='text-gray-700  capitalize'>Wema Bank</a></h6>
<h6><a href="/" className='text-gray-700  capitalize'>Help Center</a></h6>
<h6><a href="/" className='text-gray-700   capitalize'>Security and Fraud</a></h6>
<h6><a href="/" className='text-gray-700 capitalize'>Website Accessibility</a></h6>
<h6><a href="/" className='text-gray-700  capitalize'>Privacy Policy</a></h6>
</div>

</div>

<div className='pb-4 md:pb-4'>
<h1 className="text-pink-800 font-bold pb-2">Customer Support</h1>
<div className="leading-7">
<h6><a href="/">070022552528</a></h6>
<h6><a href="/">help@alat.ng</a></h6>
</div>
</div>

<div className='pb-4 md:pb-4'>
<h1 className="text-pink-800 font-bold pb-2">Quick Links</h1>
<div className='leading-7'>
<h6><a href="/" className='text-gray-700  capitalize'>Join Us</a></h6>
<h6><a href="/" className='text-gray-700  capitalize'>Developers</a></h6>
<h6><a href="/" className='text-gray-700  capitalize'>Security</a></h6>
<h6><a href="/" className='text-gray-700   capitalize'>Media Center</a></h6>
<h6><a href="/" className='text-gray-700 capitalize'>Information Center</a></h6> 
</div>
</div>

<div>
<h1 className="pb-2 text-pink-800 font-bold md:pb-3 capitalize">supported by</h1>
<div className='pb-4'>
<img src={wema} alt="wema" />
</div>
<h1 className='text-pink-800 pb-5'>Connect with us:</h1>

<div className="flex w-sm mb-16  md:flex md:justify-center overflow-x-hidden  items-center gap-1">
<a href ="" ><img src={facebook} alt="facebook" className='pb-2' /></a>
<a href ="" ><img src={twitter} alt="twitter" className='pb-2' /></a>
<a href ="" ><img src={linkedln} alt="linkedln" className='pb-2' /></a>
<a href ="" ><img src={instagram} alt="instagram" className='pb-2' /></a>
</div>


</div>

</div>

<h1 className="text-xs text-center">© ALAT 2022 | All Rights Reserved.</h1>

</>


    )
}

export default Footer