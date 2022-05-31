import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import StarIcon from '@mui/icons-material/Star';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
function SliderCircle() {
    return (
        <div id="roadmap" className="SliderCirlce">
            

<VerticalTimeline  className="vertical-timeline vertical-timeline-custom-line">
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#030c21', color: '#fff' }}
    contentArrowStyle= {{ borderRight: '7px solid  #030c21' }}
    date="LAUNCH STAGE"
    iconStyle={{ background: '#030c21', color: 'white', borderColor:'black'}}
    icon={<StarIcon />}
  >
    <h3 className="vertical-timeline-element-title text-gray-200  text-left">Concept generation, research & coin making <br/>
92% burning of coin<br/>
Fair launch on pancakeswap</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
    {/* <p>
    </p> */}
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#030c21', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #030c21' }}
    date="LISTING STAGE"
    iconStyle={{ background: '#030c21', color: 'white', borderColor:'black'}}
    icon={<StarIcon />}
    
    
  >
    <h3 className="vertical-timeline-element-title text-gray-200 text-left">Listings on top exchanges back to back<br/>
Marketing & Binance listings<br/>
NFTs & metaverse projects</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p> */}
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#030c21', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #030c21' }}
    date="MAINNET STAGE"
    iconStyle={{ background: '#030c21', color: 'white', borderColor:'black'}}
    icon={<StarIcon />}
    
  >
    <h3 className="vertical-timeline-element-title text-gray-200 text-left">Contraction migration & AI projects<br/>
Own mainnet & ecosystem<br/>
Smart contracts</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p> */}
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#030c21', color: '#fff' }}
    contentArrowStyle= {{ borderRight: '7px solid  #030c21' }}
    date="EXCHANGE & SERVICES"
    iconStyle={{ background: '#030c21', color: 'white', borderColor:'black'}}
    icon={<StarIcon />}
  >
    <h3 className="vertical-timeline-element-title text-gray-200 text-left">BABYTRON Exchange<br/>
BABYTRON payments systems<br/>
Visit whitepaper for more details</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p> */}
  </VerticalTimelineElement>
</VerticalTimeline>
        </div>
    )
}

export default SliderCircle



