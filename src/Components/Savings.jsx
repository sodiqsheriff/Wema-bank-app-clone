
import chart from '../assets/Goal.png'
{/*chart-section */}


const Savings =()=>{

    return(
        
    <div className="px-5 w-full md:flex items-center justify-between pb-10 gap-10 md:">

    <div className='w-full md:w-1/2'>
    <img src={chart} alt=" chart"  />
    </div>

    <div className='w-full md:w-1/2'>
    <button className='rounded-full mt-7 pt-3 mb-5 hover:bg-gray-300 border-2 md:bg-gray-300 md:border-4 md:rounded-2xl pb-3 px-2 py-1 text-center font-300 text-gray-600  uppercase'>Goals</button>
    <h1 className="text-4xl font-semibold pb-3 capitalize lg:text-6xl">
    smash your saving  
    <br />goals <b className="font-semibold  text-pink-800">with ALAT</b>
    </h1>
    <h3 className="text-sm pb-2 tracking-widest md:tracking-wide lg:text-lg">We have your best interest at heart, 
    <br />We curated various savings plan for you  </h3>

    <button className="bg-pink-800 text-white text-center font-semi-bold px-3 py-2 rounded font-stretch">LearnMore</button>
    </div>
    </div>

    )
}

export default Savings