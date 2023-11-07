
import bank from '../assets/safe.png'
    import dark from '../assets/Logo-only-Mock.png'
    import loan from '../assets/wallet-05.png'
    import card from '../assets/credit-card-01.png'
    import trophy from '../assets/trophy-01.png'
    {/*darksection */}

const Dark =()=>{

    return(
        <div className="px-5 md:flex justify-center gap-10 items-center md:px-8 md:gap-5 py-5  bg-black text-white">
    <div>
    <div className="w-full bg-gray-950 shadow-inner pt-10 pb-5 mb-24 pr-24 pl-5 md:pt-5 md:pr-5 md:pl-5 lg:pr-10 lg:pl-5  ">
    <div className='flex justify-center mb-10 bg-gray-900 shadow-2xl w-12 py-2 md:pb-0  rounded-full'>
    <img src={bank} alt=" bank" className=''  />
    </div>

    <h1 className="font-bold text-2xl md:text-sm capitalize pb-3">a fully digital bank</h1>
    <h1 className="text-sm md:text-xs">Fund your account,save and paybills 
    <br />from anywhere in the world on ALAT</h1>


    </div>

    <div className="w-full bg-gray-950 shadow-inner pt-10 pb-5 mb-24 pr-24 pl-5 md:pt-5 md:pr-5 md:pl-5 lg:pr-10 lg:pl-5  ">
    <div className='flex justify-center mb-10 bg-gray-900 shadow-2xl w-12 py-2 md:pb-0  rounded-full'>
    <img src={loan} alt=" loan"  />
    </div>

    <h1 className="font-bold text-2xl md:text-sm capitalize pb-3">Request Instant Loans</h1>
    <h1 className="text-sm md:text-xs">Low on cash? Get low-interest 
      <br /> short-term loans in just one click. 
    </h1>
    </div>
    </div>

    <div className='w-md py-5'>
    <img src={dark} alt="dark" className='w-96 ' />
    </div> 

    <div className=''>
    <div className="w-full bg-gray-950 shadow-inner pt-10 pb-5 mb-24 pr-24 pl-5 md:pt-5 md:pr-5 md:pl-5 lg:pr-10 lg:pl-5 ">
    <div className='flex justify-center mb-10 bg-gray-900 shadow-2xl w-12 py-2 md:pb-0  rounded-full'>
    <img src={card} alt="trophy"  />
    </div>

    <h1 className="font-bold text-2xl md:text-sm capitalize pb-3">Free Card Delivery</h1>
    <h1 className="text-sm md:text-xs">No cost card to be deliver to you in 5 
    <br /> business days, anywhere in Nigeria. 
    </h1> 
    </div>

    <div className="w-full bg-gray-950 shadow-inner pt-10 pb-5 mb-24 pr-24 pl-5 md:pt-5 md:pr-5 md:pl-5 lg:pr-10 lg:pl-5 ">
    <div className='flex justify-center mb-10 bg-gray-900 shadow-2xl w-12 py-2 md:pb-0  rounded-full'>
    <img src={trophy} alt="trophy"  />
    </div>
    <h1 className="font-bold text-2xl md:text-sm capitalize pb-3">Smash Your Saving Goals</h1>
    <h1 className="text-sm md:text-xs">Take the pressure off saving with our
    <br /> automated savings plan. 
    </h1> 
    </div>
    </div>
    </div>

    )
}

export default Dark