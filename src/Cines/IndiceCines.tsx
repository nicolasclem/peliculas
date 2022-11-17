import React from 'react'
import { Link } from 'react-router-dom'
import { urlCines } from '../Utils/endpoints'
import IndiceEntidad from '../Utils/IndiceEntidad'
import { cineDTO } from './cines.model'

const IndiceCines = () => {
  return (
    <>
     <IndiceEntidad<cineDTO>
        url={urlCines}
        urlCrear="crear"
        titulo="Cines"
        nombreEntindad="Cine"
      >
        {(cines, botones) => (
          <>
            <thead>
              <tr>
                <th>Accion</th>
                <th>Nombre</th>
              </tr>
            </thead>
            <tbody>
              {cines?.map((cine) => (
                <tr key={cine.id}>
                  <td>
                  {botones(`editar/${cine.id}`,cine.id)}

                  </td>
                  <td>{cine.nombre}</td>
                </tr>
              ))}
            </tbody>
          </>
        )}
      </IndiceEntidad>
    </>
  )
}

export default IndiceCines