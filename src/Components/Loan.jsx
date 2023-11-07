import iphonee from '../assets/Iphone-1.png'
    {/* loan-section */}


const Loan =()=>{

    return(
      
    <div className="px-5 md:10 md:flex justify-between w-full items-center md:px-8 mb-16 lg:px-20">
    <div className='w-full md:w-1/2 items-center'>
    <h1 className="text-3xl pb-2  md:text-4xl  font-semibold md:pb-4 pt-10 lg:text-6xl">Low on cash? Apply 
    <br />for a Loan in <b className='font-semibold text-pink-800'>seconds</b></h1>
    <h3 className="text-xs pb-2 md:text-sm md:pb-2">Get low-interest short-term loans whenever 
    <br />you're in one click. *Terms and conditions apply.*</h3>
    <button className="px-2 py-2 text-center bg-pink-800 rounded text-white font-semi-bold stretch">Apply now</button>
    </div>

    <div className='w-full md:w-1/2'>
    <img src={iphonee} alt="iphonee"  />
    </div>
    </div>
    )
}

export default Loan