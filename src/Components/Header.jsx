import React from 'react'

const Header = () => {
  return (
    <div className='w-full p-5 border-b border-gray-300 sticky top-0 bg-white z-10'>  
      <ul className='flex justify-end gap-6'>
        <li>About</li>
        <li>Skills</li>
        <li>Project</li>
        <li>Experience</li>
        <li>Education</li>
        <li>Contact</li>
        <li>Blog</li>
      </ul>
    </div>
  )
}

export default Header