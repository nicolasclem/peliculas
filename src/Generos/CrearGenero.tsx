import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Utils/Button';

const CrearGenero = () => {
  const navigate = useNavigate();
  return (
    <>
    <h3>Crear Genero</h3>
    <Button onClick={()=>navigate('/generos')}>Salvar</Button>
    </>
  )
}

export default CrearGenero