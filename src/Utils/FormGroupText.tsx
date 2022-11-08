import { Field, ErrorMessage } from 'formik';
import ErrorCampo from './ErrorCampo';


const FormGroupText = (props: formGroupTextProps) => {
  return (
    <div className='form-group'>
            {props.label ?<label htmlFor={props.campo} >{props.label}</label>:null}
              
              <Field name={props.campo} 
              placeholder={props.placeholder} 
              className="form-control"/>
              <ErrorMessage name={props.campo}>{mensaje=>
              <ErrorCampo  mensaje={mensaje}/>
              }</ErrorMessage>
            </div>
  )
}

interface formGroupTextProps{
    campo: string;
    label?:string;
    placeholder?: string;
}

export default FormGroupText