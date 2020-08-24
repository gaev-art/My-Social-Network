import React from 'react';
import ava from '../../img/ava.png'
import Preloader from '../common/Preloader/Preloader';
import ProfileDataForm from './ProfileData/ProfileDataForm';
import {ProfileData} from './ProfileData/ProfileData';
import ProfileStatus from './Status/ProfileStatus';
import style from './Profile.module.css'


export const Profile = (props) => {


    const onSubmit = (formData) => {
        props.saveProfile(formData)
    }


    const cancelEditMode = () => {
        props.setEditMode(false)
    }

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={style.descriptionBlock}>
            <img src={props.profile.photos.large != null
                ? props.profile.photos.large : ava} className={style.avatar}/>
            {props.editMode
                ? <ProfileDataForm
                    initialValues={props.profile}
                    profile={props.profile}
                    onSubmit={onSubmit}
                    cancelEditMode={cancelEditMode}
                    savePhoto={props.savePhoto}/>
                : <ProfileData
                    profile={props.profile}
                    isOwner={props.isOwner}
                    goToEditMode={() => {
                        props.setEditMode(true)
                    }}/>}
            <ProfileStatus
                status={props.status}
                updateStatus={props.updateStatus}/>
        </div>

    )
};