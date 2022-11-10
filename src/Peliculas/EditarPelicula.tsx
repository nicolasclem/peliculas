
import { cineDTO } from '../Cines/cines.model'
import { generoDTO } from '../Generos/generosModel'
import FormularioPeliculas from './FormularioPeliculas'
import { actorPeliculaDTO } from '../Actores/actores.model';

const EditarPelicula = () => {
  const generosNoSeleccionados: generoDTO[] = [
   
    {id:3,nombre:'Drama'}
  ]
  const generosSeleccionados: generoDTO[] = [
    {id:1,nombre:'Accion'},
    {id:2,nombre:'Terror'},
    
  ]
  const cinesSeleccionados: cineDTO[]=[
    
    {id:2,nombre:'Show Case'}
  ]
  const cinesNoSeleccionados: cineDTO[]=[
    {id:1,nombre:'Cinema Center'}
  
  ]
  const actoresSelecciondos: actorPeliculaDTO[]=[
    {id:1,nombre:"Ricardo Darin",personaje:'',foto:'https://m.media-amazon.com/images/M/MV5BMTgxOTAyMTAzNV5BMl5BanBnXkFtZTcwODE2MTUzOA@@._V1_UX214_CR0,0,214,317_AL_.jpg'}
  ]
  return (
    <>
    <div>Editar Pelicula</div>

    <FormularioPeliculas
    actoresSeleccionados={actoresSelecciondos}
    cinesSeleccionados={cinesSeleccionados}
    cinesNoSeleccionados={cinesNoSeleccionados}
     generosNoSeleccionados={generosNoSeleccionados}
     generosSeleccionados={generosSeleccionados}
      modelo={{titulo:'Spider-Man', enCines:true,trailer:'url',
    fechaLanzamiento:new Date('2019-01-01T00:00:00')}}
      onSubmit={valores=>console.log(valores)}
    />
    </>
  )
}

export default EditarPelicula