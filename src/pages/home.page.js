import { useState } from 'react';
import About from '../components/about.component';
import Banner from '../components/banner.component';
import BottomAbout from '../components/bottom-about.component';
import Contact from '../components/contact.component';
import Deployement from '../components/deployment-activity.component';
import Footer from '../components/footer.component';
import Header from '../components/header';
import Icons from '../components/icons.component';
import SliderCircle from '../components/slider-circle.component';
import TronClone from '../components/tron-clone.component'
import Vanta from '../components/vanta.component'
function Home(){
    return <div className="Home">
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
                
    </div>
}

export default Home;