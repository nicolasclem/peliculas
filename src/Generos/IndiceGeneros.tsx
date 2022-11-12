
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { generoDTO } from './generosModel';
import { pruebaAPI, urlGeneros } from '../Utils/endpoints';

const IndiceGeneros = () => {
  useEffect(()=>{
    console.log(urlGeneros);
    console.log(pruebaAPI);
    
    axios.get(urlGeneros)
    .then((respuesta: AxiosResponse<generoDTO>)=>{
      console.log(respuesta.data);
      
    })
  },[])
  return (
      <> 
      <h3>Indice Generos</h3>
      <Link to="crear">Crear Genero</Link>
      <Link to="editar">Editar Genero</Link>
      </>
      )
}

export default IndiceGeneros