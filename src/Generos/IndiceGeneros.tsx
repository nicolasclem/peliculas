
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { generoDTO } from './generosModel';
import {  urlGeneros } from '../Utils/endpoints';

const IndiceGeneros = () => {
  useEffect(()=>{
  
    axios.get(urlGeneros)
    .then((respuesta: AxiosResponse<generoDTO>)=>{
      console.log(respuesta.data);
      
    })
  },[])
  return (
      <> 
      <h3>Generos</h3>
      <Link className='btn btn-primary' to="crear">Crear Genero</Link>
      <Link to="editar">Editar Genero</Link>
      </>
      )
}

export default IndiceGeneros