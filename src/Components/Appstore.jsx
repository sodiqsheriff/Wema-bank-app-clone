import google from '../assets/google-play.png'
import apple from '../assets/apple-play.png'



const Appstore =()=>{
    return(
      
    <div className='text-center pt-10 pb-8 bg-pink-900 text-white mb-28'>
    <h1 className="text-3xl pb-3 md:text-5xl md:pb-2">I wo lo kan(it's your turn)</h1>
    <h3 className="text-sm pb-3">Download the ALAT app today,
    open an account and enjoy</h3>

    <div className="flex gap-5 md:flex justify-center md:gap-3">
    <button className="px-4 py-2 border-2 border-white rounded">
    <img src={google} alt="google" className='w-24 md:w-28'/>
    </button>
    <button className="px-4 py-2 border-2 border-white rounded">
    <img src={apple} alt="apple" className='w-24 md:28'/>
    </button>
    </div>

    </div>
    )
}

export default Appstore