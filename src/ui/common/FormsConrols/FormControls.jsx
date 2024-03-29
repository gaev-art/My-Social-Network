import React from 'react';
import style from './FormControls.module.css'
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${style.formControl} ${hasError ? style.error : ''}`}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}>

        <textarea {...input} {...restProps} />


    </FormControl>

}


export const renderTextField = ({label, input, meta: {touched, invalid, error}, ...custom}) => (
    <TextField
        className={style.inputForm}
        color='secondary'
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}/>
)

export const renderLoginField = ({label, input, meta: {touched, invalid, error}, ...custom}) => (
    <TextField
        color='secondary'
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}/>
)

export const renderCheckbox = ({input, label}) => (
    <div>
        <FormControlLabel
            control={
                <Checkbox
                    color={'default'}
                    checked={!!input.value}
                    onChange={input.onChange}/>
            }
            label={label}
        />
    </div>
)


