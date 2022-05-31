import {
    faBuilding,
    faRotate,
    faHandHoldingDollar,
    faPeopleGroup,
  
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import TelegramIcon from '@mui/icons-material/Telegram';
  import InstagramIcon from '@mui/icons-material/Instagram';
  // import Instagram from "@mui/icons-material/Instagram";
  import TwitterIcon from '@mui/icons-material/Twitter';
  
  const Deployement = (): JSX.Element => {
    return (
      <div id="social" className="px-12 w-full text-gray-100 mb-20 mt-20 " >

        <div className="rounded-2xl bg-slate-700 py-4">
        <div className="text-center text-gray-100 mb-8 space-x-2">
          <h2 className="text-4xl">Social Activity</h2>
          <br />
  
        </div>
        <div className="flex flex-col space-y-4 md:flex-row justify-evenly items-center px-6" >
          
  
          <a className="flex flex-col justify-center space-y-2 items-center" href="https://www.instagram.com/babytronworld">
            {/* <FontAwesomeIcon icon={faBuilding} style={{ fontSize: 60 }} />
             */}
             <InstagramIcon  className="text-4xl instagram rounded-xl text-white"/>
            <div className="text-center">
              <h2 className="font-medium text-4x1 mt-2 text-2xl">Instagram</h2>
              {/* <h4 className="text-gray text-sm text-semibold">10k+ followers </h4> */}
            </div>
          </a>
          <a className="flex flex-col justify-center items-center" href="https://twitter.com/babytronworld">
            <TwitterIcon className="text-[#00acee] text-8xl" />
            <div  className="flex flex-col justify-center items-center">
              <h2 className="font-medium text-4x1 mt-2 text-xl">Twitter</h2>
              {/* <h4 className="text-gray text-sm"> 1k+ followers</h4> */}
            </div>
          </a>
          <a  className="flex flex-col justify-center items-center "  href="https://t.me/babytronarmy">
            {/* <FontAwesomeIcon icon={faRotate} style={{ fontSize: 60 }} />
             */}
            <TelegramIcon className="text-blue-800 text-8xl"/>
            <div className="text-center">
              <h2 className="font-medium text-4x1 mt-2 text-xl">Telegram Group</h2>
              {/* <h4 className="text-gray text-sm">8k+ group members</h4> */}
            </div>
          </a>

  
          <a  className="flex flex-col justify-center items-center" href="https://t.me/babytronnews">
            {/* <FontAwesomeIcon icon={faRotate} style={{ fontSize: 60 }} />
             */}
             <TelegramIcon className="text-blue-700 text-8xl"/>
            <div className="text-center">
              <h2 className="font-medium text-4x1 mt-2 text-xl">Telegram Channel</h2>
              {/* <h4 className="text-gray text-sm">Last Update</h4> */}
            </div>
          </a>
        </div>
  
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 items-center md:justify-center md:space-x-4 mt-10">
          {/* <a
            type="submit"
            href="https://coinalpha.app/token/0xfc75817694083d1eaf48c238e2aa212ec4b209ea"
            className="text-sm px-3 flex-nowrap  py-3 bg-gray-800 text-white font-medium text-m leading-tight active:scale-95 rounded-lg shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
          >
            Listen on Coinalpha.app
          </a>
          <a
            type="submit"
            href="https://poocoin.app/tokens/0xfc75817694083d1eaf48c238e2aa212ec4b209ea"
            className="text-sm px-3 flex-nowrap inline-block  py-3 bg-gray-800 text-white font-medium text-m leading-tight active:scale-95 rounded-lg shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
          >
            Poocoin live chart
          </a> */}
        {/* <form method='get' action="/presale-meta.pdf">
        <button
            
            className=" px-3 text-sm  flex-nowrap  py-3 bg-violet-500 text-white font-medium text-m leading-tight active:scale-95  rounded-lg shadow-md hover:bg-violet-600 hover:shadow-lg focus:bg-violet-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
          >
            Presale details
          </button>
        </form> */}
  
        {/* <form method="get" action="/whitepaper.pdf">
                  <button className=" px-3 text-sm  flex-nowrap  py-3 bg-violet-500 text-white font-medium text-m leading-tight active:scale-95  rounded-lg shadow-md hover:bg-violet-600 hover:shadow-lg focus:bg-violet-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">View White Paper</button> 
          </form> */}
  
  
        </div>
        </div>
        
      </div>
    );
  };
  
  export default Deployement;
  