import React from 'react'

const ErrorCampo = (props: errorCampoProps) => {
  return (
    <div className='text-danger'>
                {props.mensaje}
    </div>
  )
}

interface errorCampoProps{
    mensaje: string;
}
export default ErrorCampo