import React from 'react'
import Navbar from './navbar'
const layout = ({Children}) => {
  return (
    <div>
      <Navbar/>
      <div className='Main'>
        {Children}
      </div>
    </div>
  )
}

export default layout
