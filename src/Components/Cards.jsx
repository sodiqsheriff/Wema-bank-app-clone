
import debitCard from '../assets/cardMockUp.jpg'
{/*card section */}

const Card =()=>{
    return(
        <div className="px-10 md:flex justify-between items-center md:w-full md:px-36 mb-24 mt-28 ">

        <div className='pb-8 md:pb-3 w-1/2'>
        <h1 className="text-3xl font-semibold md:tracking-wider md:text-5xl pb-4 md:font-bold">
        Get an ALAT Debit <br /> card for free
        </h1>
        <h3 className="md:text-sm stretch md:pb-3">
        Perform seamless transaction with ease on the new 
        <br /> ALAT BY WEMA mobile app and enjoy great experience.
        </h3>
    
        <button className="bg-pink-800 text-white rounded px-3 py-2 stretch">GetYoursNow</button>
        </div>
    
        <div className='md:w-1/2'>
        <img src={debitCard} alt="debitCard" />
        </div>
        </div>
    )
}

export default Card