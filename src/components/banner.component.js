import Particles from "react-tsparticles";
import RotateFramer from "./rotate.component";


function Banner(){

    const particlesInit = async (main) => {
        
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        // await loadFull(main);
      };
    

    return (
        <div className="flex flex-col justify-center banner h-[30vh] sm:h-[40vh] md:h-[100vh] bg-gradient-to-r linear">

            <RotateFramer/>

            <div className="absolute flex flex-col items-center px-[5%] lg:px-[10%] text-white space-y-8">
                    <h1 className=" text-white  text-2xl md:text-3l lg:text-4xl font-bold">Meta Web Inu is a decentralized Community driven memes NFT token!!</h1>    
                    {/* <p className="text-sm sm:text-base md:text-lg ">
                    
                        Our aim is to make the record by growing token price to 10000 X in 2022
                    </p> */}
                    {/* <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-2">
                        <p>
                            Contact Address : 
                        </p>
                        <a className="text-sm md:text-base font-semibold " href="https://bscscan.com/token/0xfc75817694083d1eaf48c238e2aa212ec4b209ea">0xfc75817694083d1eaf48c238e2aa212ec4b209ea</a>
                    </div> */}
                    
                {/* buttons */}
                    <div className="flex flex-col space-y-4 space-x-0  md:space-y-0 md:flex-row md:space-x-4 justify-center items-center">
                        <a type='submit' href="https://pancakeswap.finance/swap?outputCurrency=0xfc75817694083d1eaf48c238e2aa212ec4b209ea" className="py-1 md:py-4 px-4 sm:px-6  md:px-8 text-sm md:text-base flex-nowrap  bg-sky-700 shadow-sm rounded-md  active:scale-95"> Buy PancakeSwap </a>
                         
                        <a href="https://deeplock.io/lock/0xd064dbCEB023c6DEf074Bd9bb388deA0aaC320c1" className="py-1 sm:pd-2 md:py-4 px-4 sm:px-6 cursor-pointer md:px-8 text-sm md:text-base shadow-sm rounded-md  bg-violet-700 active:scale-95">20 Yrs liquidity lock</a> 
                       
                    </div>
            </div>
        </div>
    )
}

export default Banner;