// color: #999;
//     font-size: 12px;
//     font-weight: 500;

import EmailIcon from '@mui/icons-material/Email';
const Footer = () =>{
    return <footer className = "bg-[#0b0c22] ">
      <div className="">
        
          <div className="parthner flex flex-col py-4 px-[10%] space-y-4 sm:justify-center sm:items-center">
            {/* <h6 className="text-white font-semibold">Partnered with Innovative Globally</h6>
            <ul className="flex flex-col  md:flex-row ">
                <li><a href="#."><img src="https://demos.webicode.com/html/ico-chain/html/images/c-mg-1.png" alt=""/></a></li>
                <li><a href="#."><img src="https://demos.webicode.com/html/ico-chain/html/images/c-mg-2.png" alt=""/></a></li>
                <li><a href="#."><img src="https://demos.webicode.com/html/ico-chain/html/images/c-mg-1.png" alt=""/></a></li>
                <li><a href="#."><img src="https://demos.webicode.com/html/ico-chain/html/images/c-mg-2.png" alt=""/></a></li>
                <li><a href="#."><img src="https://demos.webicode.com/html/ico-chain/html/images/c-mg-1.png" alt=""/></a></li>
                <li><a href="#."><img src="https://demos.webicode.com/html/ico-chain/html/images/c-mg-2.png" alt=""/></a></li>
                <li><a href="#."><img src="https://demos.webicode.com/html/ico-chain/html/images/c-mg-1.png" alt=""/></a></li>
                <li><a href="#."><img src="https://demos.webicode.com/html/ico-chain/html/images/c-mg-2.png" alt=""/></a></li>
        
            </ul> */}
        
        </div>
        
  
  
 {/* right */}

      <div className="flex-col border-gray-500 border-t border-b-0 border-x-0 flex md:flex-row text-[#999] text-sm items-center w-full py-4 px-2">
       
        <div className=" col-md-6 w-[50%] flex justify-center items-center py-2 px-2">
          <p className="">Copyright © 2022 | BabyTron. |  All Rights Reserved. | babytron.network | Gmail: help@babytron.network</p>
        </div>

          <div className="flex-col sm:flex-row space-y-2 sm:space-y-0 text-right  w-[50%] flex justify-center items-center space-x-2 py-2 px-2"> 
          {/* <a href="#.">Faqs </a>  */}
          {/* <a href="#." className="flex-nowrap">Terms &amp; Conditions </a> */}
           <a href="mailto:help@babytron.network" className="flex-nowrap" > <EmailIcon/> Contact Us</a> </div>
      
      </div>
   

    </div>

  </footer>
}

export default Footer;