 
    import Iphone from '../assets/Iphone.png'
    {/*seamless-section */}


const Phone =()=>{
    return(
     
    <div className="px-10  mb-14 md:flex justify-between md:px-36 w-full  md: items-center mt-18 md:mb-18 ">
    <div className='w-full md:w-1/2' >
    <h1 className="text-3xl font-bold tracking-normal md:text-5xl  font-semi-bold pb-4 md:tracking-widest">Seamless
    <br />payment <b className="text-pink-800 font-bold md:text-pink-800 md:font-normal">method</b></h1>
    <h3 className="text-sm md:text-xs"> Perform seamless transaction with ease on the new 
    <br />ALAT BY WEMA mobile app and enjoy great experience.</h3>
    </div>

    <div className='w-full md:w-1/2'>
    <img src={Iphone} alt="Iphone" className='' />
    </div>
    </div>
    )
}

export default Phone