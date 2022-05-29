import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import StarIcon from '@mui/icons-material/Star';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
function SliderCircle() {
    return (
        <div className="SliderCirlce">
            

<VerticalTimeline  className="vertical-timeline vertical-timeline-custom-line">
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#030c21', color: '#fff' }}
    contentArrowStyle= {{ borderRight: '7px solid  #030c21' }}
    date="2011 - present"
    iconStyle={{ background: '#030c21', color: 'white', borderColor:'black'}}
    icon={<StarIcon />}
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#030c21', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #030c21' }}
    date="2011 - present"
    iconStyle={{ background: '#030c21', color: 'white', borderColor:'black'}}
    icon={<StarIcon />}
    
    
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#030c21', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #030c21' }}
    date="2011 - present"
    iconStyle={{ background: '#030c21', color: 'white', borderColor:'black'}}
    icon={<StarIcon />}
    
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#030c21', color: '#fff' }}
    contentArrowStyle= {{ borderRight: '7px solid  #030c21' }}
    date="2011 - present"
    iconStyle={{ background: '#030c21', color: 'white', borderColor:'black'}}
    icon={<StarIcon />}
    
    
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
        </div>
    )
}

export default SliderCircle



