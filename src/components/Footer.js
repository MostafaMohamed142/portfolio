import React from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <div className='d-flex justify-content-between align-items-end flex-wrap' style={{height:'60vh',backgroundColor:'black'
    }}>
      <div className='w-25 text-center'>
        <img src='' alt='Portfolio' className='w-50 fs-1 text-light mb-3 rounded' loading='lazy'/>
      </div>
      <div className='d-block w-50'>
          <div className='d-flex justify-content-center p-3 gap-2'>
             <Link to="https://www.instagram.com/simbawyy/" target='_blank'><i className='fa-brands fa-instagram fs-2'></i> </Link> 
              <Link to="https://github.com/MostafaMohamed142" target='_blank'><i className='fa-brands fa-github fs-2'></i></Link>
              <Link to="https://www.linkedin.com/in/mostafa-mohamed-628b22206/" target='_blank'><i className='fa-brands fa-linkedin fs-2'></i></Link>
          </div>
          <h4 className='text-light fs-5 text-end me-4'>Copy Rights @2023 All Rights Reserved Mostafa Mohamed</h4>
      </div>
      <div style={{border: '1px solid',
                  marginRight: '20px',
                  marginBottom: '10px'}}>
          <ScrollLink className='nav-link text-light' to='info' aria-current='true'  smooth='true' duration={500} offset={-70} spy={true}><i className="fa-solid fa-arrow-up"></i></ScrollLink>

          </div>
    </div>
  )
}

export default Footer