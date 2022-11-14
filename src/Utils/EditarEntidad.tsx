import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ReactElement } from 'react';
import Cargando from './Cargando';


export default function EditarEntidad<TCreacion,TLectura>(props: editarEntidadProps<TCreacion,TLectura>) {

    const {id}:any = useParams();
    const [entidad,setEntidad]= useState<TCreacion>();
    const navigate=  useNavigate();

    useEffect(()=>{
        axios.get(`${props.url}/${id}`)
        .then((respuesta: AxiosResponse<TLectura>)=>{
            setEntidad(props.transformar(respuesta.data));
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  async function editar(entidadEditar: TCreacion){
    try{
      await axios.put(`${props.url}/${id}`,entidadEditar);
      navigate(props.urlIndice);
    }
    catch(error){
      console.log(error);
      
    }
  }
  return (
    <>
     <h3>Editar {props.nombreEntidad}</h3>
     {entidad?props.children(entidad,editar):<Cargando />}
    </>
  )
}
interface editarEntidadProps<TCreacion,TLectura>{
    url:string;
    urlIndice: string;
    nombreEntidad: string;
    children(entidad:TCreacion, editar:(editar: TCreacion)=>void):ReactElement
    transformar(entidad: TLectura): TCreacion;
}

EditarEntidad.defaultProps ={
    transformar:(entidad: any) => entidad
}