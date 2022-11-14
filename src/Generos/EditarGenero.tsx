import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import FormularioGeneros from './FormularioGeneros';
import { useEffect, useState } from 'react';
import axios,{AxiosResponse} from 'axios';
import { urlGeneros } from '../Utils/endpoints';
import { generoDTO, generoCreacionDTO } from './generosModel';
import Cargando from '../Utils/Cargando';


const EditarGenero = () => {

  const {id}:any = useParams();
  const [genero,setGenero]= useState<generoDTO>();
  //const [erroes,setErrores]= useState<string[]>([]);
  const navigate=  useNavigate();
  useEffect(()=>{
    axios.get(`${urlGeneros}/${id}`)
    .then((respuesta: AxiosResponse<generoDTO>)=>{
        setGenero(respuesta.data)
    })
  })

  async function editar(generoEditar: generoCreacionDTO){
    try{
      await axios.put(`${urlGeneros}/${id}`,generoEditar)
      navigate('/generos');
    }
    catch(error){
      console.log(error);
      
    }
  }
  return (
    <>
    <h3>Editar Genero</h3>  
    {genero?<FormularioGeneros modelo={genero}
     onSubmit={async valores=>{
      await editar(valores)
    }} 
       
    />:<Cargando />}
    
    </>

  )
}

export default EditarGenero