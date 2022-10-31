import React from 'react'
import { Link } from 'react-router-dom'

const IndiceGeneros = () => {
  return (
      <> 
      <h3>Indice Generos</h3>
      <Link to="crear">Crear Genero</Link>
      <Link to="editar">Editar Genero</Link>
      </>
      )
}

export default IndiceGeneros