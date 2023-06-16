import React from 'react'
import { projects } from '../data'
import { Link } from 'react-router-dom'


const Projects = () => {
  
  return (
    <div className='container' id='projects'>
        <h1 className='text-center text-dark p-4' data-aos='fade-right'>Projects</h1>
        <p className='text-center text-warning p-2 mt-4 fs-4' data-aos='fade-left'> Following projects showcases my skills and experience through
          real-world examples of my work.</p>

        <div className='row my-5' style={{gap:'6rem'}}>
        {projects.map((project)=>{
          return (
           
                <div className='col-md-3 text-center p-3 proj' key={project.name} style={{boxShadow:'3px 10px 19px aliceblue',border:'1px solid aliceblue',borderRadius:'5px'}} data-aos='fade'>
                  
                     <img src={project.image} className='img-fluid rounded' alt='project' />
                  
                     
                      <h3 className='text-warning fs-2 p-2 m-4'>{project.name}</h3>
                      <p className='text-dark fs-5 m-3'>{project.description}</p>
                      <div className='d-flex gap-2 justify-content-center showed'>
                           <button className='btn btn-info'><Link to={project.link} target='_blank'>Visit Site</Link> </button> 
                            <button className='btn btn-info'><Link to={project.github}>Visit github</Link></button>

                      </div>
                </div>
            
              
            
          )
        })}
        </div>
    </div>
  )
}

export default Projects