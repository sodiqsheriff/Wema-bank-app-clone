 
    import Iphone from '../assets/Iphone.png'
    {/*seamless-section */}


const Phone =()=>{
    return(
     
    <div className="px-5 mb-14 md:flex justify-between md:px-8 w-full  md:items-center mt-8 md:mb-18 lg:px-20">
    <div className='w-full md:w-1/2 ' >
    <h1 className="text-4xl font-bold tracking-normal md:text-4xl  font-semi-bold pb-4 md:tracking-widest lg:text-6xl">Seamless
    <br />payment <b className="text-pink-800 font-bold md:text-pink-800 md:font-normal">method</b></h1>
    <h3 className="text-sm lg:text-md"> Perform seamless transaction with ease on the new 
    <br />ALAT BY WEMA mobile app and enjoy great experience.</h3>
    </div>

    <div className='w-full md:w-1/2'>
    <img src={Iphone} alt="Iphone" className='' />
    </div>
    </div>
    )
}

export default Phone