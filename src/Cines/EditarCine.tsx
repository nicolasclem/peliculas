
import FromularioCines from './FromularioCines'

const EditarCine = () => {
  return (
    <>
    <div>Editar Cine</div>
    <FromularioCines 
      modelo={{nombre:'Cinema Center', latitud:-33.30361514522778,longitud:-66.33404144226007}}
      onSubmit={valores=>console.log(valores)
      }
    />
    </>
  )
}

export default EditarCine