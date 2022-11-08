import React from 'react'
import FormularioActores from './FormularioActores'

const EditarActor = () => {
  return (
    <>
    <h3>Editar Actor</h3>

    <FormularioActores 
    modelo={{nombre:'Bauti Clem',
    biografia:`#Bauti
Bauti es mi **HIJO**`,
    fechaNacimiento: new Date('2020-08-26T00:00:00'),
    fotoURl:'https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_UX214_CR0,0,214,317_AL_.jpg'
    }}
    
    onSubmit={valores=> console.log(valores)
    }
    />
    </>
  )
}

export default EditarActor