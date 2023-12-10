import React from 'react'
import './button.css'

export function Button ({ text, handleClick }) {
  return (
    <button className="button" onClick={handleClick}>{ text } </button>
  )
}
