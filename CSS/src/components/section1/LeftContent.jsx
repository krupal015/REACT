import React from 'react'
import { MoveUpRight } from 'lucide-react'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3 '>
      <div className='p-5'>
        <h3 className='text-5xl mb-5 font-bold'>Prospective <br /><span> Customer </span><br />Segementation</h3>
        <p className='text-lg font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci hic nostrum non, ipsum error tempora id vero quisquam architecto necessitatibus!</p>
      </div>
      <div className='text-9xl'>
        <MoveUpRight  />
        <i className='ri-arrow-right-up-line'></i>
      </div>
    </div>

  )
}

export default LeftContent