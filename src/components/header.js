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

    const navLink = [{label: 'HOME', href:'home'}, {label: 'ABOUT', href:'about'}, { label: 'TOKEN',href:'token' },
    {label:'OUR ACTIVITY', href:'activity'},
    {label:'ROADMAP', href:'mainroad'},
    { label: 'TEAM',href:'team'},
  {label:'CONTACT', href:'contact'} ]


    return (
        <header className={`fixed  ${show?' hidden  md:flex shadow-sm bg-white':'hidden md:flex bg-transparent text-white  '}  w-full ${sticky&&'sticky'}  transition transform ease-out duration-300 top-0 z-50  p-5 md:px-10`}>
            {/* left */}
            {/* <div className='items px-5 py-2 flex'>  */}

            <div className="left-item flex-1 flex flex-row space-x-4 ">
                <p className='cursor-pointer'>Ecosystem</p>
                <p className='cursor-pointer'>Token</p>
                <p className='cursor-pointer'>Developer</p>
                <p className='cursor-pointer'>Resources</p>
                <p className='cursor-pointer'>About</p>
            </div>
            <div className="right-item">
                EN
            </div>
        
        </header>
    )
}

export default Header;