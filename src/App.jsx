    
    import google from './assets/google-play.png'
    import apple from './assets/apple-play.png'
    import down from './assets/down-icon.png'
    import Right from './assets/right-icon.png'
    import call from './assets/chat.png'
    {/*hero-section-images */}
    import transact from './assets/pay.png'
    import quick from './assets/24-support.png'
    import secure from './assets/vector2.png'
    import digital from './assets/Icon.png'
    {/*sub-hero-section */}
    import Iphone from './assets/Iphone.png'
    {/*seamless-section */}
    import chart from './assets/goalsectionimage.png'
    {/*chart-section */}
    import bank from './assets/safe.png'
    import dark from './assets/Logo-only-Mock.png'
    import loan from './assets/wallet-05.png'
    import card from './assets/credit-card-01.png'
    import trophy from './assets/trophy-01.png'
    {/*darksection */}
    import debitCard from './assets/cardMockUp.jpg'
    {/*card section */}
    import wema from './assets/wema-logo.png'
    import facebook from './assets/facebook.png'
    import twitter from './assets/twitter.png'
    import linkedln from './assets/linkedin-icon.png'
    import instagram from './assets/insta-icon.png'
    {/* footer section */}
    import iphonee from './assets/Iphone-1.png'
    {/* loan-section */}



    import Navbar from './Components/Navbar'
    import './App.css'

    function App() {

    return (
    <>

    {/* hero section */}

   
     <Navbar />

    <div>

      <div className="md:flex mb-7 justify-between gap-28 px-24 ">
        <div className='pt-10'>
          <span className="text-6xl font-semibold leading-tight tracking-widest ">
          <h1>
            Nigeria's first fully 
          </h1>
          <h1>digital <i className='text-pink-900'>banking.</i> </h1>
          </span>

          <section className='tracking-widest text-sm '>
            <h3 className='text-sm pt-4'>
              Choose how and where you spend your money, save alone or with 
            </h3>
            <h3>friends, take a loan to buy new devices and so much more.</h3>
          </section>

          <h1 className="text-sm tracking-widest pt-10">
          Ready to do more? Download the app.
          </h1>

          <div className="flex items-center gap-4 pt-5">
            <a href="/" className='px-4 py-2 rounded bg-black'> <img src={google} alt="google" className='w-28' /> </a>
            <a href="/" className='px-4 py-2 rounded bg-black'> <img src={apple} alt="apple" className='w-28' /> </a>
          </div>
        </div>

        <div className='py-2'>

        <div className="bg-pink-900 text-white text-sm w-80 h-56 shadow-2xl py-3 px-4">
          <div className="flex justify-between items-center pb-28">
            <div>
              <h1 className=" capitalize">simple</h1>
            </div>
            <div className="bg-white rounded-full px-2 py-3">
              <img src={down} alt="down" />
            </div>
          </div>

           <div className='leading-tight tracking-wider '>
          <h3>Simple- Chat with us anytime and get  </h3>
          <h3> reply instantly.Get your account up <br /> and ready in minutes</h3>
          </div>
        </div>

        <div className="flex justify-between items-center mt-7 px-4 py-2  w-80 text-white bg-pink-900">
        <div>
          <h1 className="text-lg">Reliable</h1>
        </div>
        <div className="bg-white rounded-full px-3 py-2">
          <img src={Right} alt="Right" />

        </div>
      </div>

      <div className="flex justify-between items-center mt-7 px-4 h-12 w-80 text-white bg-pink-900">
        <div>
          <h1 className="text-lg">Reliable</h1>
        </div>
        <div className="bg-white rounded-full px-3 py-2">
          <img src={Right} alt="Right" />
        </div>
      </div>
        </div>
      </div>
      <div className="flex justify-end pr-20 ">
        <img src={call} alt="call" />
      </div>

      
    </div>
    {/* end of hero-section */}

    {/* sub-hero-section */}

    <div className='mt-2 px-20 pb-5'>
    <div ><h1 className="text-4xl font-semi-bold">Join over 700k ALAT users 
    <br />to enjoy Nigeria's best digital bank. </h1></div>

    <div className="md:grid grid-cols-4 gap-4 pt-12 max-w-full">

    <div>
    <img src={transact} alt="transact" className='pb-3' />
    <h2 className="font-bold pb-5"> Quick Payment</h2>
    <h3 className="text-xs font-stretch">pay your bills online securely 
    <br />and instantly without glitch.</h3>
    </div>

    <div>
    <img src={secure} alt="secure" className='pb-3' />
    <h2 className="font-bold pb-5"> Secure Payment</h2>
    <h3 className="text-xs font-stretch">Bank online with an assured 
    <br />mind towards security</h3>
    </div>

    <div>
    <img src={digital} alt="digital" className='pb-3' />
    <h2 className="font-bold pb-5"> 100% Digital</h2>
    <h3 className="text-xs font-stretch">Get your account up and  
    <br />ready in minutes.</h3>
    </div>

    <div>
    <img src={quick} alt="quick" className='pb-3' />
    <h2 className="font-bold pb-5"> Customer Support</h2>
    <h3 className="text-xs font-stretch">Chat with us anytime and  
    <br />get reply instantly</h3>
    </div>

    </div>


    </div>

    {/*phone-section*/}

    <div className="md:flex justify-between  tracking-widest items-center px-20  mt-18  mb-10 ">
    <div >
    <h1 className="text-5xl font-semi-bold pb-4">Seamless
    <br />payment <b className="text-pink-800 font-normal">method</b></h1>
    <h3 className="text-xs">perform seamless transaction with ease on the new 
    <br />ALAT BY WEMA mobile app and enjoy great experience.</h3>
    </div>

    <div>
    <img src={Iphone} alt="Iphone" className='w-4/5' />
    </div>
    </div>

    {/*savings chart */}

    <div className="md:flex items-center justify-between px-24 mb-7">

    <div>
    <img src={chart} alt=" chart" className='w-4/5' />
    </div>

    <div>
    <button className='bg-gray-300 border-4 rounded-2xl pb-3 px-2 py-1 text-center font-300 text-gray-600  uppercase'>Goals</button>
    <h1 className="text-5xl font-semibold pb-3 capitalize">
    smash your saving  
    <br />goals <b className="font-semibold  text-pink-800">with ALAT</b>
    </h1>
    <h3 className="text-xs pb-3">We have your best interest at heart, 
    <br />We curated various savings plan for you</h3>

    <button className="bg-pink-800 text-white text-center font-semi-bold px-3 py-2 rounded font-stretch">LearnMore</button>
    </div>
    </div>

    {/* loan */}

    <div className="md:flex justify-between items-center px-20 mb-12">
    <div>
    <h1 className=" text-5xl font-semibold pb-4 ">Low on cash? Apply 
    <br />for a Loan in <b className='font-semibold text-pink-800'>seconds</b></h1>
    <h3 className="text-xs pb-2">Get low-interest short-term loans whenever 
    <br />you're in one click. *Terms and conditions apply.*</h3>
    <button className="px-2 py-2 text-center bg-pink-800 rounded text-white font-semi-bold stretch">ApplyNow</button>
    </div>

    <div>
    <img src={iphonee} alt="iphonee" className='w-4/5' />
    </div>
    </div>

    {/* account creation */}

    <div className='mb-10'>
    <h1 className="text-5xl font-semi-bold text-center stretch pb-4">Create an account in 4 easy steps</h1> 

    <div className="md:flex justify-center items-center font-semibold text-center gap-20 pb-10">
    <div>
    <button className="bg-pink-800 mb-3 text-white  px-5 py-1 rounded-xl">1</button>
    <h3>Confirm your identity</h3>
    </div>
    <div>
    <button className="bg-pink-800 mb-3 text-white font-semibold px-5 py-1 rounded-xl">2</button>
    <h3>Verify your phone number</h3>
    </div>
    <div>
    <button className="bg-pink-800 mb-3 text-white font-semibold px-5 py-1 rounded-xl">3</button>
    <h3>Create a profile</h3>
    </div>
    <div>
    <button className="bg-pink-800 mb-3 text-white font-semibold px-5 py-1 rounded-xl">4</button>
    <h3>Secure your profile</h3>
    </div>
    </div>
    <div className="flex justify-center">
    <button className="px-2 py-2 rounded font-semi-bold text-white bg-pink-800 capitalize" >signup Now</button>
    </div>
    </div>

    {/*dark section */}

    <div className="md:flex justify-center items-center gap-16 px-5 py-5  bg-black text-white">
    <div>
    <div className="bg-gray-950 shadow-inner pt-10 pb-5 mb-24 pr-24 pl-5  ">
    <div className='flex justify-center mb-10 bg-gray-900 shadow-2xl w-12 py-2   rounded-full'>
    <img src={bank} alt=" bank" className=''  />
    </div>

    <h1 className="font-bold text-sm capitalize pb-3">a fully digital bank</h1>
    <h1 className="text-xs">Fund your account,save and paybills 
    <br />from anywhere in the world on ALAT</h1>


    </div>

    <div className="bg-gray-950 shadow-inner pt-10 pb-5 mb-10  pr-24 pl-5  ">
    <div className='flex justify-center mb-10 bg-gray-900 shadow-2xl w-12 py-2   rounded-full'>
    <img src={loan} alt=" loan"  />
    </div>

    <h1 className="font-bold text-sm capitalize pb-3">Request Instant Loans</h1>
    <h1 className="text-xs">Low on cash? Get low-interest 
      <br /> short-term loans in just one click. 
    </h1>
    </div>
    </div>

    <div>
    <img src={dark} alt="dark" className='w-80 ' />
    </div> 

    <div className=''>
    <div className="bg-gray-950 shadow-inner pt-10 pb-5 mb-24  pr-24 pl-5 ">
    <div className='flex justify-center mb-10 bg-gray-900 shadow-2xl w-12 py-2   rounded-full'>
    <img src={card} alt="trophy"  />
    </div>

    <h1 className="font-bold text-sm capitalize pb-3">Free Card Delivery</h1>
    <h1 className="text-xs">No cost card to be deliver to you in 5 
    <br /> business days, anywhere in Nigeria. 
    </h1> 
    </div>

    <div className="bg-gray-950 shadow-inner pt-10 pb-5 mb-10  pr-24 pl-5">
    <div className='flex justify-center mb-10 bg-gray-900 shadow-2xl w-12 py-2 rounded-full'>
    <img src={trophy} alt="trophy"  />
    </div>
    <h1 className="font-bold text-sm capitalize pb-3">Smash Your Saving Goals</h1>
    <h1 className="text-xs">Take the pressure off saving with our
    <br /> automated savings plan. 
    </h1> 
    </div>
    </div>
    </div>

    {/*card section */}

    <div className="md:flex justify-between items-center px-24 mb-24 mt-28 ">

    <div className='pb-3'>
    <h1 className="tracking-wider text-5xl pb-4 font-bold">
    Get an ALAT Debit <br /> card for free
    </h1>
    <h3 className="text-sm stretch pb-3">
    Perform seamless transaction with ease on the new 
    <br /> ALAT BY WEMA mobile app and enjoy great experience.
    </h3>

    <button className="bg-pink-800 text-white rounded px-3 py-2 stretch">GetYoursNow</button>
    </div>

    <div>
    <img src={debitCard} alt="debitCard" className='w-3/5'/>
    </div>
    </div>

    {/* appstore-section */}

    <div className='text-center pt-10 pb-8 bg-pink-900 text-white mb-28'>
    <h1 className="text-5xl pb-2">I wo lo kan(it's your turn)</h1>
    <h3 className="text-sm pb-3">Download the ALAT app today,
    open an account and enjoy</h3>

    <div className="md:flex justify-center gap-3">
    <button className="px-4 py-2 border-2 border-white rounded">
    <img src={google} alt="google" className='w-28'/>
    </button>
    <button className="px-4 py-2 border-2 border-white rounded">
    <img src={apple} alt="apple" className='w-28'/>
    </button>
    </div>

    </div>

    {/* footer-section */}

    <div className="md:flex justify-between px-24 mb-10  gap-40 items-center">

    <div>
    <h1 className="md:flex items-center text-xs font-semi-bold">
    We'd love to let you know our products,
    ALAT news and offers via Email
    </h1>
    </div>

    <div className="md:flex items-center  gap-5 ">
    <div className='text-sm'>
    <input type="text" placeholder='Enter your Email' className='w-60 h-6 px-1 py-3 border-2 border-gray-300 rounded' />
    </div>
    <div>
    <button className="px-4 py-2 m-2  rounded text-sm text-white bg-pink-900">Subscribe</button>
    </div>
    </div>
    </div>

    <div className="md:flex justify-center  text-xs gap-60 px-24 mb-16">

    <div className='pb-4'>
    <h1 className="text-pink-800 font-bold pb-2">Company</h1>
    <div className='leading-7'>
    <h6><a href="/" className='text-gray-700  capitalize'>about alat</a></h6>
    <h6><a href="/" className='text-gray-700  capitalize'>Wema Bank</a></h6>
    <h6><a href="/" className='text-gray-700  capitalize'>Help Center</a></h6>
    <h6><a href="/" className='text-gray-700   capitalize'>Security and Fraud</a></h6>
    <h6><a href="/" className='text-gray-700 capitalize'>Website Accessibility</a></h6>
    <h6><a href="/" className='text-gray-700  capitalize'>Privacy Policy</a></h6>
    </div>

    </div>

    <div className='pb-4'>
    <h1 className="text-pink-800 font-bold pb-2">Customer Support</h1>
    <div className="leading-7">
    <h6><a href="/">070022552528</a></h6>
    <h6><a href="/">help@alat.ng</a></h6>
    </div>
    </div>

    <div className='pb-4'>
    <h1 className="text-pink-800 font-bold pb-2">Quick Links</h1>
    <div className='leading-7'>
    <h6><a href="/" className='text-gray-700  capitalize'>Join Us</a></h6>
    <h6><a href="/" className='text-gray-700  capitalize'>Developers</a></h6>
    <h6><a href="/" className='text-gray-700  capitalize'>Security</a></h6>
    <h6><a href="/" className='text-gray-700   capitalize'>Media Centert</a></h6>
    <h6><a href="/" className='text-gray-700 capitalize'>Information Center</a></h6> 
    </div>
    </div>

    <div>
    <h1 className="text-pink-800 font-bold pb-3 capitalize">supported by</h1>
    <div className='pb-4'>
    <img src={wema} alt="wema" />
    </div>
    <h1 className='text-pink-800 pb-5'>Connect with us:</h1>

    <div className="md:flex justify-center gap-3">
    <img src={facebook} alt="facebook" />
    <img src={twitter} alt="twitter" />
    <img src={linkedln} alt="linkedln" />
    <img src={instagram} alt="instagram" />
    </div>


    </div>

    </div>

    <h1 className="text-xs text-center">© ALAT 2022 | All Rights Reserved.</h1>



    </>
    )
    }

    export default App
