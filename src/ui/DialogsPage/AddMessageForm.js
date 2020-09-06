import {required} from '../../utils/validators/validators';
import {Field, reduxForm} from 'redux-form';
import {Textarea} from '../common/FormsConrols/FormControls';
import React from 'react';
import Button from '@material-ui/core/Button';


function AddMessageForm(props) {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                name={'newMessageBody'}
                placeholder='Enter your message'
                component={Textarea}
                validate={[required]}
            />
        </div>
        <div>
            <Button color="secondary" type="submit">Send</Button>

        </div>
    </form>;
}

export let AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)