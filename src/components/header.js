import { useEffect,useState } from 'react';
import Navigation from './Navigation.component';


function Header({sticky}){
    
    const [show,setShow] = useState(false);
    const [searchInput,setSearchInput] = useState("");
    const [startDate,setStartDate] = useState(null);
    const [endDate,setEndDate] = useState(null);
    const [focus,setFocus] = useState(null)

    useEffect(()=>{
        onscroll = ()=>{
            if(window.scrollY>0){
                setShow(true)
            }else
            setShow(false)
        }
    },[setShow])




    return (
        <header className={`fixed  ${show?' hidden  md:flex shadow-sm bg-white':'hidden md:flex bg-transparent text-white  '}  w-full ${sticky&&'sticky'}  transition transform ease-out duration-300 top-0 z-50  p-5 md:px-10`}>
            {/* left */}
            {/* <div className='items px-5 py-2 flex'>  */}

            <div className="left-item flex-1 flex flex-row items-center space-x-4 ">
                <img className='h-10 object-contain' src="logo.svg"/>
                <a href='#home'><p className='cursor-pointer'>HOME</p></a>
                <a href="#sale"><p className='cursor-pointer'>SALE</p></a>
                <a href="#roadmap"><p className='cursor-pointer'>ROADMAP</p></a>
                <a href="#about"><p className='cursor-pointer'>ABOUT</p></a>
                <a href="#social"><p className='cursor-pointer'>SOCIAL ACTIVITY</p></a>
                <a href="#contact"><p className='cursor-pointer'>CONTACT</p></a>
            </div>
            <div className="right-item">
                EN
            </div>
        
        </header>
    )
}

export default Header;