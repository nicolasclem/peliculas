import React from 'react'
import FormularioActores from './FormularioActores'

const CrearActor = () => {
  return (
    <>
    <h3>Crear Actor</h3>

    <FormularioActores 
    modelo={{nombre:'', fechaNacimiento: undefined}}
    onSubmit={valores=> console.log(valores)
    }
    />
    </>
  )
}

export default CrearActor