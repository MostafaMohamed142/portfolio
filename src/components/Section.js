import React, { useState } from 'react';
import Projects from './Projects';
import Experience from './Experience';
const Section = () => {
    const [condition,setCondition] = useState(true)
    const handleCondition = ()=>{
        setCondition(!condition)
    }
  return (
    <div id="section">
      <div className='d-flex justify-content-center gap-4 p-3'>
        <button className='btn btn-secondary fs-4' onClick={handleCondition}>
        Projects
      </button>
      <button  className='btn btn-info fs-4' onClick={handleCondition}>
        Experience
      </button>
      </div>
      
      
      
       {condition ? <Projects/> : <Experience/>}
      
    </div>
  );
};

export default Section;

