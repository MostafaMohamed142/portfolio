import React from 'react'

const Blog = () => {
  return (
    <div className='d-flex justify-content-center align-items-center gap-2 bg-light blog'>
        <h2 className='text-dark fs-3'>Subscribe to my Blog</h2>
        <input type='email' placeholder='enter your email' className='input-control p-2 w-25' onChange={(e)=> e.target.value}/>
        <button className='btn btn-info'>Submit</button>
    </div>
  )
}

export default Blog