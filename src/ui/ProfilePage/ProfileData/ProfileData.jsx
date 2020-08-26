import React from 'react';
import yes from '../../../img/yes.png'
import no from '../../../img/no.png'
import {Contact} from './Contact';
import s from '../Profile.module.css';

export const ProfileData = (props) => {
    return <div>
        {props.isOwner &&
        <div>
            <button onClick={props.goToEditMode}>edit</button>
        </div>}
        <div>
            <div>
                <b>Full name : </b>{props.profile.fullName}
            </div>
            <div>
                <b>Looking for a job : </b>
                <img className={s.lookingForAJob} src={props.profile.lookingForAJob ? yes : no}/>
            </div>
            <div>
                <b>My professional skill :</b> {props.profile.lookingForAJobDescription}
            </div>
            <div>
                <b>About Me : </b>{props.profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>::{Object.keys(props.profile.contacts)
                .filter(key => props.profile.contacts[key])
                .map(key => {
                    return <Contact
                        key={key}
                        contactTitle={key}
                        contactValue={props.profile.contacts[key]}/>
                })}
            </div>
        </div>
    </div>
}
