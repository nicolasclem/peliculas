import { Form, Formik, FormikHelpers } from 'formik';
import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../Utils/Button';
import FormGroupText from '../Utils/FormGroupText';
import { actorCreacionDTO } from './actores.model'
import * as Yup from 'yup';
import FormGroupFecha from '../Utils/FromGroupFecha';
import FormGroupImagen from '../Utils/FormGroupImagen';
import FormGroupMarkDown from '../Utils/FormGroupMarkDown';

const FormularioActores = (props:formularioActoresProps) => {
  return (
    <Formik
        initialValues={props.modelo}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
            nombre:Yup.string().required('este campo es requerido').primerLetraMayuscula(),
            fechaNacimiento:Yup.date().nullable().required("fecha nacimiento obligatoria")
        })}
        
        >
    {(formikProps)=>(
        <Form>
            <FormGroupText campo='nombre' label='Nombre'/>
            <FormGroupFecha  label='Fecha Nacimiento' campo='fechaNacimiento' /> 
            <FormGroupImagen campo='foto' label='foto'imagenURL={props.modelo.fotoURl}/>
            <FormGroupMarkDown campo='biografia' label='biografia' />          
            <Button disabled={formikProps.isSubmitting}
                    type="submit"
            >Salvar</Button>
            <Link className="btn btn-secondary" to="/actores">Cancelar</Link>
        </Form>
    )

    }    
    </Formik>
  )
}
interface formularioActoresProps{
    modelo:actorCreacionDTO;
    onSubmit(valoreS:actorCreacionDTO, acciones: FormikHelpers<actorCreacionDTO>):void;
} 
export default FormularioActores