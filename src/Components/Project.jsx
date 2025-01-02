import React from 'react'

const Project = () => {
  return (
    <div className='w-full h-screen flex justify-around flex-col items-center border-2 px-10 border-black'>
      <h1>Projects</h1>
        <div className='w-full h-full gap-5 flex justify-around'>
          <div className='w-1/3 h-1/2 bg-pink-300'>
            <img src="" alt="preview" />
            <h1>title</h1>
            <p>description</p>
            <div>
              <a href="">github</a>
              <a href="">live</a>
            </div>
          </div>
          <div className='w-1/3 h-1/2 bg-pink-300'>
          <img src="" alt="preview" />
            <h1>title</h1>
            <p>description</p>
            <div>
              <a href="">github</a>
              <a href="">live</a>
            </div>
          </div>
          <div className='w-1/3 h-1/2 bg-pink-300'>
          <img src="" alt="preview" />
            <h1>title</h1>
            <p>description</p>
            <div>
              <a href="">github</a>
              <a href="">live</a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Project