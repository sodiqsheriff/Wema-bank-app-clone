import transact from '../assets/pay.png'
import quick from '../assets/24-support.png'
import secure from '../assets/vector2.png'
import digital from '../assets/Icon.png'
{/*sub-hero-section */}


const Sub =()=> {

    return(

        
    <div className='mt-1 pb-2 px-12 md:mt-2 md:pl-32 md:pb-5'>
    <div ><h1 className="text-3xl font-bold md:text-4xl md:font-semibold">Join over 700k ALAT users 
    <br />to enjoy Nigeria's best digital bank. </h1></div>

    <div className="grid   md:flex md:flex-row md:justify-between pt-12 w-md">

    <div className=' w-full pb-6 md:pb-0'>
    <img src={transact} alt="transact" className='flex pb-3' />
    <h2 className="pb-2 text-lg font-bold md:font-bold md:pb-5"> Quick Payment</h2>
    <h3 className="text-sm tracking-widest md:text-xs md:tracking-wider">pay your bills online securely 
    <br />and instantly without glitch.</h3>
    </div>

    <div className='w-full pb-6 md:pb-0'>
    <img src={secure} alt="secure" className='pb-3' />
    <h2 className="pb-2 text-lg font-bold md:font-bold md:pb-5"> Secure Payment</h2>
    <h3 className="text-sm tracking-widest md:text-xs md:tracking-wider">Bank online with an assured 
    <br />mind towards security</h3>
    </div>

    <div className='w-full pb-6 md:pb-0'>
    <img src={digital} alt="digital" className='pb-3' />
    <h2 className="pb-2 text-lg font-bold md:font-bold md:pb-5"> 100% Digital</h2>
    <h3 className="text-sm tracking-widest md:text-xs md:tracking-wider">Get your account up and  
    <br />ready in minutes.</h3>
    </div>

    <div className='w-full pb-6 md:pb-0'>
    <img src={quick} alt="quick" className='pb-3' />
    <h2 className="pb-2 text-lg font-bold md:font-bold md:pb-5"> Customer Support</h2>
    <h3 className="text-sm tracking-widest md:text-xs md:tracking-wider">Chat with us anytime and  
    <br />get reply instantly</h3>
    </div>

    </div>


    </div>
    )
}

export default Sub