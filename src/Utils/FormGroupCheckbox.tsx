import { Field } from 'formik';
import React from 'react'

const FormGroupCheckbox = (props: formGroupCheckbox) => {
  return (
    <div className='from-group fomr-check'>
        <Field className="form-check-input" 
        id={props.campo} name={props.campo}
        type="checkbox"
        />
        <label htmlFor={props.campo}>{props.label}</label>
    </div>
  )
}

interface formGroupCheckbox{
    label: string;
    campo:string;
}
export default FormGroupCheckbox