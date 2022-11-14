
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { generoDTO } from './generosModel';
import {  urlGeneros } from '../Utils/endpoints';
import ListadoGenerico from '../Utils/ListadoGenerico';
import Button from '../Utils/Button';

const IndiceGeneros = () => {
  const [generos,setGeneros]= useState<generoDTO[]>();
  useEffect(()=>{
  
    axios.get(urlGeneros)
    .then((respuesta: AxiosResponse<generoDTO[]>)=>{
      setGeneros(respuesta.data)
    })
  },[])
  return (
      <> 
      <h3>Generos</h3>
      <Link className='btn btn-primary' to="crear">Crear Genero</Link>

      <ListadoGenerico listado={generos}>
        <table className='table table-striped'>
          <thead>
              
                <tr>
                  <th>Accion</th>
                  <th>Nombre</th>
                </tr>
              
          </thead>
          <tbody>
              {generos?.map(genero=>
                <tr key={genero.id}>
                  <td>
                    <Link className='btn btn-success' to={`/generos/${genero.id}`}>Editar</Link>
                    <Button className='btn btn-danger'>Borrar</Button>
                  </td>
                  <td>
                    {genero.nombre}
                  </td>
                </tr>)}
          </tbody>
        </table>



      </ListadoGenerico>
      </>
      )
}

export default IndiceGeneros