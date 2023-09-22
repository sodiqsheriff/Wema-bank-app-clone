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

      <div className=" block p-12  md:flex md:flex-row  justify-center gap-52 md:mt-10 w-full md:px-0 ">
        <div className='pt-10 pb-7 md:pt-10 '>
          <span className="text-4xl font-semibold leading-tight md:text-6xl md:font-semibold md:leading-tight tracking widest w-1/2 font-jarkata ">
          <h1>
            Nigeria's first fully 
          </h1>
          <h1>digital <i className='text-pink-900'>banking.</i> </h1>
          </span>

          <section className='text-sm md:tracking-widest '>
            <h3 className='text-sm pt-1'>
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

        <div className='max-w-sm  md:w-4/5 '>
          
              
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