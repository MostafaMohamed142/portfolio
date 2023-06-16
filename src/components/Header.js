import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
  const [showNavLeft, setShowNavLeft] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:'rgba(189, 146, 64, 0.59)'}}>
  
  <div className="container">
    
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={()=> setShowNavLeft(!showNavLeft)}
    >
      <i className="fas fa-bars"></i>
    </button>

    
    <div className={`collapse navbar-collapse ${showNavLeft ? 'show' : ''}`} id="navbarSupportedContent" >
      
      <NavLink className="navbar-brand mt-2 mt-lg-0 text-light" href="#">
        <img
          src=""
          height="15"
          alt="Portfoilo"
          loading="lazy"
        />
      </NavLink>
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <ScrollLink className='nav-link text-dark' to='info' aria-current='true'  smooth='true' duration={500} offset={-70} spy={true}>About</ScrollLink>
        </li>
        <li className="nav-item">
            <ScrollLink to="skills" smooth='true' duration={500} offset={-70} spy={true} className='nav-link text-dark'>
                Skills
              </ScrollLink>
        </li>
        <li className="nav-item">
              <ScrollLink to="projects" smooth='true' duration={500} offset={-70} spy={true} className='nav-link text-dark'>
                Projects
              </ScrollLink>
        </li>

      </ul>
      
    </div>
   

    
    <div className="d-flex align-items-center">
      
      <NavLink className="text-reset me-3" to="https://www.behance.com/mostafamohamed142/" target='_blank'>
      <i className="fa-brands fa-behance"></i>
      </NavLink>
      <NavLink className="text-reset me-3" to="https://github.com/MostafaMohamed142" target='_blank'>
      <i className='fa-brands fa-github fs-3'></i>
      </NavLink>
      <NavLink className="text-reset me-3" to="https://www.linkedin.com/in/mostafa-mohamed-628b22206/" target='_blank'>
      <i className='fa-brands fa-linkedin fs-3'></i>
      </NavLink>
    </div>
    
  </div>
 
</nav>
  );
}