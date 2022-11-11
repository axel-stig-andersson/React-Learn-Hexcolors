import React from 'react'

const ColorBox = ( { color }) => { 
  return (
    <div className='color-box' style={{background: `${color}`}} >
    </div> 
  )
}


export default ColorBox