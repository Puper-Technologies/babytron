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
    <div className="relative flex flex-col items-center justify-center banner h-[100vh] bg-gradient-to-r linear">

    <div className='w-full h-[100vh]' ref={myRef}>

    </div>

    <div className="absolute flex flex-col  items-center px-[5%] lg:px-[10%] text-white space-y-8">
        <div className="jsx-1114352951 banner-tron">
            <img src="https://tron.network/_next/static/images/TR-685a563f3de480d5a8b2e09c7d9b0d51.png" className="jsx-1114352951 banner-tr"/>
            <img src="https://tron.network/_next/static/images/ON-6b7459b487d443e801e0bc62d5acb9a4.png" className="jsx-1114352951 banner-on"/>
    </div>

    <h1 className='text-3xl font-semibold '>
      Expected minimum growth 100X 
    </h1>
    <div className='flex flex-col'>
      <p>Contact Address:  <a href='https://bscscan.com/token/0xca8ba12a965099c9494e1ecc4551711a95070931'>0xCA8bA12A965099C9494E1ecc4551711a95070931</a></p>
    
    <div className='flex item-center justify-evenly py-5'>

      <button className='px-4 py-2 bg-violet-700 rounded-md shadow-sm active:scale-95'>
        Buy now in private sale
      </button>

      <button className='px-4 py-2 bg-slate-700 rounded-md shadow-sm active:scale-95'>
        Buy now in private sale
      </button>

    </div>
      
    </div>
      
    
    
    </div>
    
    
</div>

)
}

export default MyComponent