import './tron.css'
import RotateFramer from './rotate.component';
import Vanta from './vanta.component'
import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.halo.min'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

function TronClone(){



    return ( 
        <div id="banner-container" className="jsx-1114352951 banner">
                <div style={ { position: "relative" } } className="jsx-1114352951">
                    <div style={{width:'100%',color:'#fff',overflow:'hidden'}} className="jsx-1114352951 banner-box">
                        <div className="jsx-1114352951 banner-bg banner-en-bg1">
                            <div className="jsx-1114352951 banner-tron">
                                <img src="https://tron.network/_next/static/images/TR-685a563f3de480d5a8b2e09c7d9b0d51.png" className="jsx-1114352951 banner-tr"/>
                                <img src="https://tron.network/_next/static/images/ON-6b7459b487d443e801e0bc62d5acb9a4.png" className="jsx-1114352951 banner-on"/>
                            </div>
                        <div className="jsx-1114352951 banner-desc">DECENTRALIZE THE WEB</div>
                        {/* <RotateFramer/> */}

                        <div className="jsx-1114352951 maindata-desc">Boasting over 94 million accounts and 3.2 billion transactions, TRON is the world's fastest-growing public chain.</div>
                        <div style={{position:'absolute', left:0, top:'-20px',zIndex:10 }} id ="banner-canvas" className="jsx-1114352951 webtrx-canvas">
                            <canvas width="1898" height="875" style={ {width: '1519px' ,height: '700px'}}/>
                        </div>
                    </div>
                </div>
            </div>
    </div>)
}



export default TronClone;