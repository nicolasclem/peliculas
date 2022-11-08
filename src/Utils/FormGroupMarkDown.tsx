import { Field, useFormikContext } from 'formik';
import ReactMarkdown from 'react-markdown';
import './formGroupMarkdown.css'

const FormGroupMarkDown = (props: formGroupMarkDownProps) => {

    const {values} = useFormikContext<any>();
  
  return (
    <div className='form-group form-markdown'>
        <div>
            <label>{props.label}</label>
            <div>
                <Field name={props.campo} as="textarea" className="from-textarea"/>
            </div>
        </div>
        <div>
            <label>{props.label} (preview):</label>
            <div className='markdown-container'>
                    <ReactMarkdown children={values[props.campo]} />
            </div>
        </div>
    </div>
  )
}
interface formGroupMarkDownProps{
    campo: string;
    label:string;
}
export default FormGroupMarkDown