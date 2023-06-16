import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { work } from '../assets';
import { experience } from '../data';


const Experience = () => {
  return (
    <>
    <div className="container" id='experience'>
      <h2 className='text-center fs-1 text-dark p-4'>Experience</h2>
      <p className='text-center text-warning p-2 mt-4 fs-4' data-aos='fade-left'>My Latest Work Experience</p>

      {experience.map((exp,key)=>{
        return(
           <VerticalTimeline layout='2-columns' key={key}>
      <VerticalTimelineElement className='Vertical-timeline-element--work' contentStyle={{background: 'rgb(84, 100, 113)', color: '#fff'}} contentArrowStyle={{borderRight: '7px solid  burlywood'}} date={exp.date} iconStyle={{ background: 'rgb(220, 221, 221)', color: '#fff' }} icon={<div className='d-flex justify-content-center align-items-center w-100 h-100'><img src={work} alt='javascript developer' className='w-50 h-50 object-contain rounded'/></div>} key={exp.name} position={exp.postion} >
        <h3 className='vertical-timeline-element-title'>{exp.name}</h3>
        <h4 className='vertical-timeline-element-subtitle p-2 fs-5 text-dark'>{exp.company}</h4>
        <ul>
          
        {exp.points.map((point,key)=>{
          return (
            <li key={key}>{point}</li>
          )
            
        })}    
        
        
        </ul>
      </VerticalTimelineElement>
    </VerticalTimeline>
        )
      })}
    </div>
   
    </>
  )
}

export default Experience