
import EditarEntidad from '../Utils/EditarEntidad'
import { urlActores } from '../Utils/endpoints'
import { convertirActorAFormData } from '../Utils/formDataUtils'
import { actorCreacionDTO, actorDTO } from './actores.model'
import FormularioActores from './FormularioActores'

const EditarActor = () => {

  const transformar = (actor : actorDTO)=>{
    
    return{
      nombre: actor.nombre,
      fotoURl: actor.foto,
      biografia: actor.biografia,
      fechaNacimiento: new Date(actor.fechaNacimiento)
    }

  }
  return (
    <>

<EditarEntidad<actorCreacionDTO, actorDTO>
      url={urlActores}
      urlIndice="/actores"
      nombreEntidad="Actores"
      transformar={transformar}
      transformarFromData={convertirActorAFormData}
      >
      {(entidad,editar)=>
      <FormularioActores modelo={entidad}
        onSubmit={async valores=>{
        await editar(valores)
        }}
    />}
    </EditarEntidad>  
    {/* <h3>Editar Actor</h3> */}

    {/* <FormularioActores 
    modelo={{nombre:'Bauti Clem',
    biografia:`#Bauti
Bauti es mi **HIJO**`,
    fechaNacimiento: new Date('2020-08-26T00:00:00'),
    fotoURl:'https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_UX214_CR0,0,214,317_AL_.jpg'
    }}
    
    onSubmit={valores=> console.log(valores)
    }
    /> */}
    </>
  )
}

export default EditarActor