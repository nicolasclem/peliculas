
import IndiceEntidad from '../Utils/IndiceEntidad'
import { actorDTO } from './actores.model'
import { urlActores } from '../Utils/endpoints';

const IndiceActores = () => {
  return (
    <>
    <IndiceEntidad<actorDTO>
       url={urlActores}
       urlCrear="crear"
       titulo="Actores"
       nombreEntindad="Actor"
      >
         {(actores, botones) => (
          <>
            <thead>
              <tr>
                <th>Accion</th>
                <th>Nombre</th>
              </tr>
            </thead>
            <tbody>
              {actores?.map((actor) => (
                <tr key={actor.id}>
                  <td>
                  {botones(`editar/${actor.id}`,actor.id)}

                  </td>
                  <td>{actor.nombre}</td>
                </tr>
              ))}
            </tbody>
          </>
        )}


    </IndiceEntidad>
    </>
  )
}

export default IndiceActores