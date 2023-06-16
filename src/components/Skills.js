import React,{useState} from 'react'
import ProgressBar from 'react-animated-progress-bar';

const Skills = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [skills, setSkills] = useState([
        { name: 'Frontend', progress:80, show: true,isMobileView:true },
        { name: 'Wordpress', progress: 60, show: true,isMobileView:true },
        { name: 'Digital Marketing', progress: 70, show: true,isMobileView:false },
        { name: 'SEO', progress: 70, show: false,isMobileView:false },
        { name: 'Data Entry', progress: 90, show: false,isMobileView:false }
      ]);

      
    const handleNext = () => {
      setActiveIndex((prevIndex) => (prevIndex === skills.length-1  ? prevIndex : prevIndex + 1));
      const updatedSkills = skills.map((skill, index) => ({
        ...skill,
        show: index >= activeIndex && index <= activeIndex + 1
      }));
  
      setSkills(updatedSkills);
    };
  
    const handlePrevious = () => {
      setActiveIndex((prevIndex) => (prevIndex === 0 ? prevIndex : prevIndex - 1));
      const updatedSkills = skills.map((skill, index) => ({
        ...skill,
        show: index >= activeIndex - 1 && index <= activeIndex
      }));
  
      setSkills(updatedSkills);
    };
   
  return (
        <div className='container-fluid' id='skills'>
            <h2 className='text-center fs-1 text-dark font-weight-bold my-4 p-4' data-aos='fade-right'>Skills</h2>
            <p className='text-center text-warning w-responsive mx-auto mb-5' data-aos='fade-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget lorem sed arcu vehicula ultrices. Fusce</p>
            
              <div className='d-flex justify-content-center gap-5 text-center' data-aos='flip-right'>
              
         {skills.map((skill, index) => (
          <div key={index} className={`skill ${skill.show === true  ? 'active' : ''}`}>
                  <h3>{skill.name}</h3>
                <ProgressBar width="300" trackWidth="13" percentage={`${skill.progress}`} />
                            
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-between postion-relative" style={{marginTop:'5%'}}>
        <button onClick={handlePrevious} disabled={activeIndex === 0} className='btn btn-primary mx-5'><i className='fa-solid fa-arrow-left'></i></button>
        <button onClick={handleNext} disabled={activeIndex === skills.length -1} className='btn btn-primary mx-5'><i className='fa-solid fa-arrow-right'></i></button>
      </div>
         
               
        </div>
  )
}

export default Skills