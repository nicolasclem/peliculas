import React from 'react'
import FromularioCines from './FromularioCines'

const CrearCine = () => {
  return (
    <>
    <div>Crear Cine</div>
    <FromularioCines 
      modelo={{nombre:''}}
      onSubmit={valores=>console.log(valores)
      }
    />
    </>
  )
}

export default CrearCine