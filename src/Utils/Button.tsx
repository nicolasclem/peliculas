import React from 'react'

const Button = (props: buttonProps) => {
  return (
    <button type='button' className='btn btn-primary'
    onClick={props.onClick}
    >{props.children}</button>
  )
}
interface buttonProps{
    children:React.ReactNode
    onClick():void;
}
export default Button