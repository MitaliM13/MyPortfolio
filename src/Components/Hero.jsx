import React from 'react'

const Hero = () => {
  return (
    <div className='h-screen w-full bg-green-300 flex justify-center items-center'>
      <div className='w-2/3 border border-black border-b h-full p-8 flex flex-col justify-center items-center'>
          <h2>My Name</h2>
          <h5>Profession</h5>
      </div>

      <div className='w-1/3 border border-black border-b h-full flex justify-center items-center'>
        <img src="" alt="my pic" />
      </div>
    </div>
  )
}

export default Hero