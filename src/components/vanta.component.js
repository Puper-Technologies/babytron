import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.dots.min'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const MyComponent = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current,
        backgroundColor:"#430905",
        highlightColor:"#430905",
        midtoneColor:"0x59170d",
        // size: 0.4,
        zoom:0.5,
        blurFactor: 0.47
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return(
    <div id="home" className="relative  flex flex-col items-center justify-center banner h-[100vh] bg-gradient-to-r linear">

    <div className='w-full h-[100vh]' ref={myRef}>

    </div>

    <div className="absolute flex flex-col  items-center px-[5%] lg:px-[10%] text-white space-y-8">
        <div className="jsx-1114352951 banner-tron">
            <img src="https://tron.network/_next/static/images/TR-685a563f3de480d5a8b2e09c7d9b0d51.png" className="hidden md:flex jsx-1114352951 banner-tr"/>
            <img src="https://tron.network/_next/static/images/ON-6b7459b487d443e801e0bc62d5acb9a4.png" className="jsx-1114352951 hidden md:flex banner-on"/>
        </div>

        <p className='text-xl w-[100vw] px-4 sm:text-2xl md:text-3xl font-bold '>
        Expected minimum growth 100X with 4 month
        </p>
    <div className='flex flex-col  items-center text-sm '>
      <p>Contact Address:</p>
      <a href='https://bscscan.com/token/0xca8ba12a965099c9494e1ecc4551711a95070931'>0xCA8bA12A965099C9494E1ecc4551711a95070931</a>
    
      <div className='flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-4 py-4'>

          <a href="https://dappbuilder.org/bsc/tokensaletimeref2/tokensale.html?id=0xFd8ae7fb891aEC6718e50626d73381dFd91294fA&net=56" className='px-4 py-2 cursor-pointer bg-rose-600 rounded-md shadow-sm active:shadow-md active:scale-95 transition duration-150 '>
            Buy in private sale
          </a>
          <form method="get" action="/whitepaper.pdf">          
            <button type="submit" className='px-4 py-2 cursor-pointer bg-orange-700 rounded-md shadow-sm active:shadow-md active:scale-95 transition duration-150'>
              View white Paper
            </button>
            </form>
        </div>
      
    </div>
  </div>    
</div>

)
}

export default MyComponent