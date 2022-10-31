import React from 'react'
import { Link } from 'react-router-dom'

const IndiceActores = () => {
  return (
    <>
    <h3>IndiceActores</h3>
    <Link to="crear">Crear Genero</Link>
    <Link to="editar">Editar Genero</Link>
    </>
  )
}

export default IndiceActores