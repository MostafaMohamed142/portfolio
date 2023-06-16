import Typewriter from 'typewriter-effect';
import mostafa from '../images/mostafa.jpg'
import fileSaver from 'file-saver';
import Tech from './Tech';


const Info = () => {
   
    // file saver for resume download
     const saveFile = () => {
        fileSaver.saveAs(
            process.env.PUBLIC_URL + "/resource/Resume-Mostafa-Mohamed.pdf",
          "Mostafa's resume.pdf"
        )};
  return (
    <div className='container-fluid back' id='info'>
        {/* intro and image */}
        <div className='d-lg-flex d-md-block p-3'>
                <div className='m-auto' data-aos='fade-right'>
                    <h2 className='t-head'>Hello,<br/> I'm Mostafa Mohamed</h2>
                    <div className='fs-2 mx-5 text-warning'>
                        <Typewriter
                        options={{
                            autoStart:true,
                            loop:true,
                            deleteSpeed: 50,
                            delay: 20,
                            strings:['Frontend Developer','Wordpress Developer','Digital Makerter']
                            
                        }}
                    />
                    </div>
                    <div className='d-flex'>
                       <button download={true} className='btn bg-light text-dark my-5 btn-info' onClick={saveFile}><i className="fa-solid fa-arrow-up-right-from-square mx-2"></i>Download Resume</button>
                    <button className='btn bg-warning text-dark mx-4 my-5 btn-link' onClick={()=> window.open('https://www.linkedin.com/in/mostafa-mohamed-628b22206/', '_blank')}>
                    <i className="fa-solid fa-long-arrow-alt-right mx-2"></i>
                        Let's connect
                    </button> 
                    </div>
                    
                </div>
                        <div className='w-50 m-auto my-3 p-3 m'>
                                <img src={mostafa} alt='personal' className='img-thumbnail rounded w-75 mt-5' loading='lazy'  style={{filter:'drop-shadow(#9cc1cc70 14px 15px 10px))',boxShadow:'4px 3px 4px 9px #c4b08b'}} data-aos='fade-left'/>
                        </div>
        </div>
        {/* end intro and image */}
            {/* techonlogies section */}
            
           {/* end techonlogies section */}
           
            <Tech/>
           
        </div>
            
            //   end container
  )
}

export default Info