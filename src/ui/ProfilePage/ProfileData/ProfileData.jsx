import React from 'react';
import {Contact} from './Contact';
import Button from '@material-ui/core/Button';

export const ProfileData = (props) => {
    return <div>
        <div>
            <div>
                <b>Full name : </b>{props.profile.fullName}
            </div>
            <div>
                <b>Looking for a job : </b>
                {props.profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {props.profile.lookingForAJob && <div>
                <b>My professional skill :</b> {props.profile.lookingForAJobDescription}
            </div>}
            <div>
                <b>About Me : </b>{props.profile.aboutMe}
            </div>
            <div>
                <div><b>Contacts : </b></div>
                {Object.keys(props.profile.contacts)
                    .filter(key => props.profile.contacts[key])
                    .map(key => {
                        return <Contact
                            key={key}
                            contactTitle={key}
                            contactValue={props.profile.contacts[key]}/>
                    })}
            </div>
        </div>
        {props.isOwner && <Button color="secondary" onClick={props.goToEditMode}>edit</Button>}
    </div>
}

