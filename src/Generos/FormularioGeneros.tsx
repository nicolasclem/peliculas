import { Formik, FormikHelpers , Form} from 'formik';
import { Link } from 'react-router-dom';
import Button from '../Utils/Button';
import FormGroupText from '../Utils/FormGroupText';
import * as Yup from 'yup';
import { generoCreacionDTO } from './generosModel';

const FormularioGeneros = (props:formularioGenerosProps) => {
  return (
    <Formik
      initialValues={props.modelo}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        nombre: Yup.string()
          .required("Este campo(Nombre) es requerido")
          .max(50,'Longitud maxima es de 50 caracteres')
          .primerLetraMayuscula(),
      })}
    >
      {(formikProps) => (
        <Form>
          <FormGroupText
            campo="nombre"
            label="Nombre"
            placeholder="Ej.  Terror"
          />

          <Button disabled={formikProps.isSubmitting} type="submit">
            Salvar
          </Button>
          <Link className="btn btn-secondary" to="/generos">
            Cancelar
          </Link>
        </Form>
      )}
    </Formik>
  );
}


interface formularioGenerosProps{
    modelo: generoCreacionDTO;
    onSubmit(valores:generoCreacionDTO,accion: FormikHelpers<generoCreacionDTO>):void
}

export default FormularioGeneros