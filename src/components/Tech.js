
import BallCanvas from './Ball'
import { techonologies } from '../data';


const Tech =()=> {

   
  return (
    <div className='d-block my-4 p-4'>
                    <h4 className='text-light text-center fs-1 p-2 my-4' data-aos='fade-up'>Techonlogies I use</h4>
                            <div className='d-flex flex-wrap justify-content-center'>
                                {techonologies.map((tech)=>{
                                return (
                                    <div key={tech.name}>
                                        <BallCanvas icon={tech.icon}/>
                                        
                                        
                                    </div>
                                )
                            })}
                            </div>
                            
                            
         </div>
        
       
  )
}

export default Tech
