import axios from 'axios';
import { actorCreacionDTO } from './actores.model';
import FormularioActores from './FormularioActores';
import { urlActores } from '../Utils/endpoints';
import { useNavigate } from 'react-router-dom';
import { convertirActorAFormData } from '../Utils/formDataUtils';

const CrearActor = () => {
  const navigate= useNavigate()
  async function crear( actor: actorCreacionDTO){
    try {
      const formData= convertirActorAFormData(actor);
      await axios(
        {
          method:'post',
          url:urlActores,
          data:formData,
          headers:{'Content-Type':'multipart/form-data'}
      
        }
      )
      navigate('/actores')
   } catch (error) {
     console.error(error);
     
 }
}
  return (
    <>
    <h3>Crear Actor</h3>

    <FormularioActores 
    modelo={{nombre:'', fechaNacimiento: undefined}}
    onSubmit={async valores=> await crear(valores)
      
      
    }
    />
    </>
  )
}

export default CrearActor