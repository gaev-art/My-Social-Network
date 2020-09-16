import React from 'react'
import {Field, reduxForm} from 'redux-form'
import Button from '@material-ui/core/Button';
import {required, validate} from '../../utils/validators/validators';
import {renderLoginField} from '../common/FormsConrols/FormControls';


const LoginForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="login" component={renderLoginField} label="Login"/>
            </div>
            <div>
                <Field type='password' name="password" component={renderLoginField} label="Password" />
            </div>
            <div />
            {props.captchaUrl && <div>
                <img alt='' src={props.captchaUrl}/>
                <Field
                    type="text"
                    placeholder='Symbols from image'
                    component={renderLoginField}
                    name={'captcha'}
                    validate={required}/>
            </div>
            }
            <div style={{margin:'10px'}}>
                <Button color="secondary" type="submit">Login</Button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'login',
    validate,
})(LoginForm)