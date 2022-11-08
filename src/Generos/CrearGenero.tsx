
import FormularioGeneros from './FormularioGeneros';


const CrearGenero = () => {
  //const navigate = useNavigate();
  return (
    <>
    <h3>Crear Genero</h3>

    <FormularioGeneros modelo={{nombre:''}}
     onSubmit={async valores=>{
      await new Promise(r=>setTimeout(r,3000))
      console.log(valores);
    }} 
       
    />
     
    </>
  )
}

export default CrearGenero