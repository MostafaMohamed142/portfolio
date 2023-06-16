import React, { useState } from 'react'

 
const Contact = () => {
    const [message,setMessage] = useState({
        fName:'',
        lName:'',
        email:"",
        phoneNum:'',
        msg:''
    })
    
    
  return (
      
                <div className='container-fluid formgroup d-flex justify-content-end' id='contact' style={{height:'500px'}}>
                            
                                
                                <div className='col-sm-6' style={{boxShadow:'box-shadow: -17px 12px 17px 0px #020202'}}>
                                <h2 className='p-3 text-dark' style={{textDecoration:'underline'}}>Get In Touch</h2>
                                    <form method='post'>
                                        
                                            <div className='d-flex d-sm-block d-xs-block p-3 gap-1'>
                                            
                                                <input type='text' name='fName' placeholder='First Name' className='p-1' value={message.fName} onChange={(e)=> setMessage({...message,fName:e.target.value})}/>
                                            
                                                <input type='text' name='lName' placeholder='Last Name' className='p-1 ' value={message.lName} onChange={(e)=> setMessage({...message,lName:e.target.value})}/>
                                                </div>
                                            
                                                <div className='d-flex d-sm-block d-xs-block p-3 gap-1'>
                                                
                                                <input type='email' name='email' placeholder='E-Mail' className=' p-1' value={message.email} onChange={(e)=> setMessage({...message,email:e.target.value})}/>
                                            
                                                <input type='number' name='Phone' placeholder='Phone Num' className='p-1' value={message.phoneNum} onChange={(e)=> setMessage({...message,phoneNum:e.target.value})}/>
                                                </div>
                                                
                                                <div className='d-block p-3'>
                                                
                                                    <textarea name='msgs' value={message.msg}  placeholder='Text Mostafa' rows={3} cols={30} wrap='soft' className='w-75 p-3' onChange={(e)=> setMessage({...message,msg:e.target.value})}/>
                                                    <br/>
                                                    <button className='btn btn-primary w-50 mt-2' type='submit'>Send</button>
                                                </div>
                                                        
                                                            
                                                        

                                    </form>  
                                </div>
                                      
                            
                           
                    
                </div>
                    
                    
                
        
    
  )
}

export default Contact