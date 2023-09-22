import iphonee from '../assets/Iphone-1.png'
    {/* loan-section */}


const Loan =()=>{

    return(
      
    <div className="px-10 md:10 md:flex justify-between w-full items-center md:px-36 mb-16">
    <div className='w-1/2'>
    <h1 className="text-3xl  md:text-5xl  font-semibold pb-4 ">Low on cash? Apply 
    <br />for a Loan in <b className='font-semibold text-pink-800'>seconds</b></h1>
    <h3 className="text-xs pb-2 md:text-sm md:pb-2">Get low-interest short-term loans whenever 
    <br />you're in one click. *Terms and conditions apply.*</h3>
    <button className="px-2 py-2 text-center bg-pink-800 rounded text-white font-semi-bold stretch">ApplyNow</button>
    </div>

    <div className='w-1/2'>
    <img src={iphonee} alt="iphonee"  />
    </div>
    </div>
    )
}

export default Loan