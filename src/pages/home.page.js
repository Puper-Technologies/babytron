import { useState } from 'react';
import About from '../components/about.component';
import Banner from '../components/banner.component';
import BottomAbout from '../components/bottom-about.component';
import Contact from '../components/contact.component';
import Deployement from '../components/deployment-activity.component';
import Footer from '../components/footer.component';
import Header from '../components/header';
import Icons from '../components/icons.component';
import Navigation from '../components/Navigation.component';
import SliderCircle from '../components/slider-circle.component';
import TronClone from '../components/tron-clone.component'
import Vanta from '../components/vanta.component'
function Home(){

    const navLink = [{label: 'HOME', href:'home'}, {label: 'ABOUT', href:'about'}, { label: 'TOKEN',href:'token' },
    {label:'OUR ACTIVITY', href:'activity'},
    {label:'ROADMAP', href:'mainroad'},
    { label: 'TEAM',href:'team'},
  {label:'CONTACT', href:'contact'} ]

    return <div className="Home overflow-x-hidden">
                <Header/>
                <Vanta/>
                {/* <TronClone/> */}
                <About/>
                <Icons />
                <SliderCircle/>
                {/* <Token/> */}
                <BottomAbout />
                <Deployement/>
                {/* <Contact/> */}
                <Footer/>
                <div className = {` md:hidden fixed z-[100] top-0 left-0`}>
                
                    <Navigation link={navLink}/>
                </div>
    </div>
}

export default Home;