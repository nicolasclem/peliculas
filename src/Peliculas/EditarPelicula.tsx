
import FormularioPeliculas from './FormularioPeliculas'

const EditarPelicula = () => {
  return (
    <>
    <div>Editar Pelicula</div>

    <FormularioPeliculas
      modelo={{titulo:'Spider-Man', enCines:true,trailer:'url',
    fechaLanzamiento:new Date('2019-01-01T00:00:00')}}
      onSubmit={valores=>console.log(valores)}
    />
    </>
  )
}

export default EditarPelicula