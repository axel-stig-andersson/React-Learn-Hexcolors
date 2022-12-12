import React from 'react'

const ColorBox = ( { color }) => { 
  return (
    <div className='color-box' style={{background: `${color}`, marginTop: 80}} >
    </div> 
  )
}


export default ColorBox