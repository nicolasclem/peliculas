import React from 'react'
//import { useParams } from 'react-router-dom'
import FormularioGeneros from './FormularioGeneros';

const EditarGenero = () => {

  //const {id}:any = useParams();
  return (
    <>
    <h3>Editar Genero</h3>  
    <FormularioGeneros modelo={{nombre:'Accion'}}
     onSubmit={async valores=>{
      await new Promise(r=>setTimeout(r,3000))
      console.log(valores);
    }} 
       
    />
    </>

  )
}

export default EditarGenero