

const Account =()=>{

    return(
        
    <div className='px-5 md:px-8 mb-10'>
    <h1 className="text-3xl font-bold md:text-4xl font-semi-bold text-center stretch pb-4 lg:text-5xl">Create an account in 4 easy steps</h1> 

    <div className="font-normal md:flex justify-center items-center md:font-semibold text-center gap-20 pb-10">
    <div className='pb-5 md:pb-0'>
    <button className="bg-pink-800 mb-3 text-white  px-5 py-1 rounded-xl">1</button>
    <h3>Confirm your identity</h3>
    </div>
    <div className='pb-5 md:pb-0'>
    <button className="bg-pink-800 mb-3 text-white font-semibold px-5 py-1 rounded-xl">2</button>
    <h3>Verify your phone number</h3>
    </div>
    <div className='pb-5 md:pb-0'>
    <button className="bg-pink-800 mb-3 text-white font-semibold px-5 py-1 rounded-xl">3</button>
    <h3>Create a profile</h3>
    </div>
    <div className='pb-5 md:pb-0'>
    <button className="bg-pink-800 mb-3 text-white font-semibold px-5 py-1 rounded-xl">4</button>
    <h3>Secure your profile</h3>
    </div>
    </div>
    <div className="flex justify-center">
    <button className="hover:bg-pink-600 hover:text-bold px-2 py-2 rounded font-semi-bold text-white bg-pink-800 capitalize" >Signup Now</button>
    </div>
    </div>
    )
}


export default Account