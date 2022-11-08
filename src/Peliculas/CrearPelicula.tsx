import React from 'react'
import FormularioPeliculas from './FormularioPeliculas'

const CrearPelicula = () => {
  return (
    <>
    <div>Crear Pelicula</div>

    <FormularioPeliculas
      modelo={{titulo:'', enCines:false,trailer:''}}
      onSubmit={valores=>console.log(valores)}
    />
    </>
  )
}

export default CrearPelicula