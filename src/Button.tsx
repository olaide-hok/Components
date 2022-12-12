import React from 'react'

interface ButtonProps {
  children: string
}

const Button = ({children}: ButtonProps) => {
  return <button>Hi there!</button>
}

export default Button
