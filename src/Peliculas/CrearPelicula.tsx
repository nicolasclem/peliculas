import React from 'react'
import FormularioPeliculas from './FormularioPeliculas'
import { generoDTO } from '../Generos/generosModel';
import { cineDTO } from '../Cines/cines.model';

const CrearPelicula = () => {

  const generos: generoDTO[] = [
    {id:1,nombre:'Accion'},
    {id:2,nombre:'Terror'},
    {id:3,nombre:'Drama'}
  ]
  const cines: cineDTO[]=[
    {id:1,nombre:'Cinema Center'},
    {id:2,nombre:'Show Case'}
  ]
  return (
    <>
    <div>Crear Pelicula</div>

    <FormularioPeliculas
      cinesNoSeleccionados={cines}
      cinesSeleccionados={[]}
      generosNoSeleccionados={generos}
      generosSeleccionados={[]}
      modelo={{titulo:'', enCines:false,trailer:''}}
      onSubmit={valores=>console.log(valores)}
    />
    </>
  )
}

export default CrearPelicula