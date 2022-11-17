import React from 'react'
import FromularioCines from './FromularioCines'
import { cineCreacionDTO } from './cines.model';
import axios from 'axios';
import { urlCines } from '../Utils/endpoints';
import { useNavigate } from 'react-router-dom';


const CrearCine = () => {

  const navigate= useNavigate();
  async function crear(cine : cineCreacionDTO){
    try {
        await axios.post(urlCines,cine)
        navigate('/cines');
    } catch (error) {
      console.error(error);
      
    }
  }
  return (
    <>
    <div>Crear Cine</div>
    <FromularioCines 
      modelo={{nombre:''}}
      onSubmit={async valores=>
        await crear(valores)        
      }
    />
    </>
  )
}

export default CrearCine