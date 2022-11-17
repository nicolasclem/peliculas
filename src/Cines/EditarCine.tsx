
import EditarEntidad from '../Utils/EditarEntidad'
import { urlCines } from '../Utils/endpoints'
import { cineCreacionDTO, cineDTO } from './cines.model'
import FromularioCines from './FromularioCines'

const EditarCine = () => {
  return (
      <EditarEntidad<cineCreacionDTO, cineDTO>
      url={urlCines} urlIndice="/cines" nombreEntidad="Cines"
      >
      {(entidad,editar)=><FromularioCines modelo={entidad}
      onSubmit={async valores=>{
      await editar(valores)
    }}
    />}
    </EditarEntidad>  
    
  )
}

export default EditarCine