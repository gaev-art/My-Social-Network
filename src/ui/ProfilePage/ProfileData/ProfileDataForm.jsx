import React from 'react';
import s from '../Profile.module.css';
import {renderCheckbox, renderTextField, Textarea} from '../../common/FormsConrols/FormControls';
import {Field, reduxForm} from 'redux-form';
import Button from '@material-ui/core/Button';

const ProfileDataForm = (props) => {


    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }


    return <form onSubmit={props.handleSubmit}>
        <input type={'file'} onChange={onMainPhotoSelected}/>
        <div style={{margin: '10px'}}>
            <Field name="fullName" component={renderTextField} label="Full name"/>
        </div>
        <div style={{margin: '10px'}}>
            <b>About Me</b>:
            <Field

                type="text"
                placeholder='About Me'
                component={Textarea}
                name={'aboutMe'}
            />
        </div>
        <div style={{margin: '10px'}}>
            <Field type="checkbox" name="lookingForAJob" component={renderCheckbox} label="Looking for a job"/>
        </div>
        <div style={{margin: '10px'}}>
            <b>My professional skills</b> :
            <Field
                type="text"
                placeholder='My skills'
                component={Textarea}
                name={'lookingForAJobDescription'}
            />
        </div>
        <div>
            <b>Contacts</b>:{Object.keys(props.profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <Field style={{width: '500px'}} type="text" name={'contacts.' + key} component={renderTextField}
                       label={key}/>
            </div>
        })}
        </div>
        {props.error && <div className={s.formSummaryError}>
            {props.error}
        </div>}
        <div>
            <Button type="submit">save</Button>
            <Button onClick={props.cancelEditMode}>cancel</Button>
        </div>
    </form>
}

const ProfileDataReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm)

export default ProfileDataReduxForm