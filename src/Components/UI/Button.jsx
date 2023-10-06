import React from 'react'

const Button = ({text, onClick, className}) => {
  return (
    <button className={`universal-button ${className}`} onClick={onClick}>
        {text}
    </button>
  )
}

export default Button