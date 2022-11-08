import { Form, Formik, FormikHelpers } from 'formik';
import { peliculaCreacionDTO } from './peliculas.model'
import * as Yup from 'yup';
import FormGroupText from '../Utils/FormGroupText';
import FormGroupCheckbox from '../Utils/FormGroupCheckbox';
import FromGroupFecha from '../Utils/FromGroupFecha';
import FormGroupImagen from '../Utils/FormGroupImagen';
import Button from '../Utils/Button';
import { Link } from 'react-router-dom';


const FormularioPeliculas = (props: formularioPeliculasProps) => {
  return (
    <Formik
        initialValues={props.modelo}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({

            titulo: Yup.string().required('Campo requerido').primerLetraMayuscula()

        })}

    >
    {formikProps =>(
        <Form>
            <FormGroupText label='titulo' campo='titulo'/>
            <FormGroupCheckbox label='En cines' campo='enCines'/>
            <FormGroupText label='Trailer' campo='trailer' />
            <FromGroupFecha campo='fechaLanzamiento' label='Fecha Lanzamiento' />
            <FormGroupImagen campo='poster' label='Poster' imagenURL={props.modelo.posterURL}/>

            <Button disabled={formikProps.isSubmitting} type="submit">Enviar</Button>
            <Link className="btn btn-secondary" to="/">Cancelar</Link>
        </Form>
    )}    
    </Formik>
  )
}


interface formularioPeliculasProps{
    modelo: peliculaCreacionDTO
    onSubmit(valores:peliculaCreacionDTO, acciones: FormikHelpers<peliculaCreacionDTO>):void
}
export default FormularioPeliculas