
import React from 'react'

function Header() {
  return (
    <div className="Header sticky top-0 bg-red-400 z-50">
        <div className='items px-5 py-2 flex'> 
            <div className="left-item flex-1 flex flex-row space-x-4 ">
                <p>Ecosystem</p>
                <p>Token</p>
                <p>Developer</p>
                <p>Resources</p>
                <p>About</p>
            </div>
            <div className="right-item">
                EN
            </div>
        </div>
       

    </div>
  )
}

export default Header