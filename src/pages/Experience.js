import React from 'react';
import {VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';




function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        {/* <VerticalTimelineElement className='vertical-timeline-element--education' date='2011 - 2013' 
        iconStyle={{background: '#3e497a', color: '#fff'}} icon={<SchoolIcon/>}>
            <h3 className='vertical-timeline-element-title'>Helwan high School</h3>
            <h4 className='vertical-timeline-element-subtitle'>Cairo, Egypt</h4>            
            <p>High school diploma</p>
        </VerticalTimelineElement> */}
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2013 - 2018' 
        iconStyle={{background: '#3e497a', color: '#fff'}} icon={<SchoolIcon/>}>
            <h3 className='vertical-timeline-element-title'>Higher Institute of Engineering-15th of May City</h3>
            <h4 className='vertical-timeline-element-subtitle'>Cairo, Egypt</h4>
            <p>Bachelor's degree in engineering, Civil engineering department</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--work' date='2022 - Current' 
        iconStyle={{background: '#e9d35b', color: '#fff'}} icon={<WorkIcon/>}>
            <h3 className='vertical-timeline-element-title'>Frontend developer - NAT solutions</h3>
            <h4 className='vertical-timeline-element-subtitle'>Maadi, Cairo, Egypt</h4>
            <p>Developing the frontend side of projects, determining the structure and design of web pages, support the Frontend team and responsive design for every project.</p>
        </VerticalTimelineElement>                
      </VerticalTimeline>
    </div>
  )
}

export default Experience