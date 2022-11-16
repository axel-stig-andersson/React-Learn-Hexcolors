import React from 'react'

const Button = ({ text, onClick}) => {
  return (
    <>
        <button style={{ margin: '30px', fontSize: 20}} onClick={onClick}>  
            {text}
        </button>
    </>
  )
}

export default Button