import React from 'react'
import LeftContent from './LeftContent'

const navbar = () => {
  return (
    <div className='flex justify-between items-center py-6 px-10'> 
       <h4 className='bg-black text-white px-6 py-2 rounded-lg tracking-wider '>Target Audience</h4> 
       <button className='bg-gray-200 px-6 py-2 rounded-full tracking-wider'>Digital Banking Platform</button>
      
     </div>
  )
}

export default navbar