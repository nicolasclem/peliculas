
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { urlGeneros } from '../Utils/endpoints';
import FormularioGeneros from './FormularioGeneros';
import { generoCreacionDTO } from './generosModel';


const CrearGenero = () => {
  const navigate = useNavigate();
  
  async function crear(genero: generoCreacionDTO){
    try {
       await axios.post(urlGeneros,genero);
       navigate('/generos')
    } catch (error) {
      console.error(error);
      
  }
}
  return (
    <>
    <h3>Crear Genero</h3>

    <FormularioGeneros modelo={{nombre:''}}
     onSubmit={async valores=>{
      await crear(valores);
    }} 
    />
    </>
  )
}

export default CrearGenero