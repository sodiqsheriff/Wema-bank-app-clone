import google from '../assets/google-play.png'
import apple from '../assets/apple-play.png'
import Simple from '../assets/Simple.png'
import Reliable from '../assets/Reliable.png'
import Covenient from '../assets/Convenient.png'
import call from '../assets/chat.png'
{/*hero-section-images */}

const Herosection = () => {


return(
  <>
<div>

      <div className=" block px-5  md:flex flex-row  justify-between w-full md:mt-0  md:px-10  lg:px-20 ">
        <div className='py-7 w-md md:pt-10 w-full '>
          <span className="text-4xl font-semibold leading-tight md:text-5xl md:font-semibold md:leading-tight tracking widest w-1/2 font-jarkata lg:text-7xl ">
          <h1>
            Nigeria's first fully 
          </h1>
          <h1>digital <i className='text-pink-900'>banking.</i> </h1>
          </span>

          <section className='text-sm  lg:tracking-widest '>
            <h3 className='text-sm pt-1 '>
              Choose how and where you spend your money, save alone or with 
            </h3>
            <h3>friends, take a loan to buy new devices and so much more.</h3>
          </section>

          <h1 className="text-sm pt-5 md: tracking-widest md:pt-2">
          Ready to do more? Download the app.
          </h1>

          <div className="flex items-center gap-4 pt-5">
            <a href="/" className='px-4 py-2 rounded bg-black'> <img src={google} alt="google" className='w-24 md:w-28' /> </a>
            <a href="/" className='px-4 py-2 rounded bg-black'> <img src={apple} alt="apple" className='w-24 md:w-28' /> </a>
          </div>
        </div>

        <div className='w-full max-w-sm  md:w-1/2 '>
          
              
            <div className="pb-5 md:pb-7">
              <img src={Simple} alt="Simple" />
            </div>
            <div className='pb-5 md:pb-7'>
              <img src={Reliable} alt="Reliable" />
            </div>
            <div>
              <img src={Covenient} alt="Covenient" />
            </div>
         
            <div className="flex justify-end w-sm">
        <img src={call} alt="call" className='' />
      </div>
      

        
      </div>
     
      </div>

      
    </div>
    </>
)
}
export default Herosection