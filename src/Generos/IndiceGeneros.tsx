import { urlGeneros } from "../Utils/endpoints"
import IndiceEntidad from "../Utils/IndiceEntidad"
import { generoDTO } from "./generosModel"

const IndiceGeneros = () => {

  return (
    <>
      <IndiceEntidad<generoDTO>
        url={urlGeneros}
        urlCrear="crear"
        titulo="Generos"
        nombreEntindad="Genero"
      >
        {(generos, botones) => (
          <>
            <thead>
              <tr>
                <th>Accion</th>
                <th>Nombre</th>
              </tr>
            </thead>
            <tbody>
              {generos?.map((genero) => (
                <tr key={genero.id}>
                  <td>
                  {botones(`editar/${genero.id}`,genero.id)}

                  </td>
                  <td>{genero.nombre}</td>
                </tr>
              ))}
            </tbody>
          </>
        )}
      </IndiceEntidad>
    </>
  );
}

export default IndiceGeneros
