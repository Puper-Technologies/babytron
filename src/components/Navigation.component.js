import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import '../Navigation.css'
export default function Navigation(props: any) {

  const link: any[] = props.link;
  const [ showNav , setShowNav] = useState(false);


    const onClickEventHandler = ()=>{
        setShowNav(false);
    }


    useEffect(()=>{
        document.addEventListener('click',onClickEventHandler);


        return ()=>{
            document.removeEventListener('click',onClickEventHandler);
        }
    },[])

  return <div className='navigation__menu '>

       {/* {!showNav && <MenuIcon fontSize='large' className='menu__icon' onClick={()=>setShowNav(true)} />} */}
       
   {<div className={`navigation__core`}>

        <div onClick={(e)=>e.stopPropagation()} className='nav__icon z-50 shadow-md rounded-lg bg-[#430905] cursor-pointer  transition duration-500'>
            {showNav&&<MenuOpenIcon color='primary'  fontSize="large" onClick={()=>setShowNav(false)} className='menu__open__icon' />}
            {!showNav&&<MenuIcon color='primary' fontSize='large' className='text-black' onClick={()=>setShowNav(true)} />}
        </div>
        
        <div className={`flex flex-col w-[240px] md:w-[350px] h-[100vh] bg-[#430905] fixed  z-50   ${showNav?"scale-up-hor-left":" scale-out-hor-left"}`}>
            {link.map(({label, href})=><a key={href} href={'#'+href} className="text-white text-xl text-semibold px-8 py-4 text-center cursor-pointer hover:bg-black hover:border-t-indigo-900">{label}</a>)}
            
        </div>
    </div>}

  </div>;
}
