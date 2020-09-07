import React from 'react';
import ava from '../../img/ava.png'
import ProfileDataForm from './ProfileData/ProfileDataForm';
import {ProfileData} from './ProfileData/ProfileData';
import ProfileStatus from './Status/ProfileStatus';
import MyPostContainer from './MyPost/MyPostContainer';
import PreloaderInit from '../common/Preloaders/PreloaderForInit';


export const Profile = (props) => {

    const onSubmit = (formData) => {
        props.saveProfile(formData)
    }


    const cancelEditMode = () => {
        props.setEditMode(false)
    }

    if (!props.profile) {
        return <PreloaderInit/>
    }

    return (
        <div>
            <div>
                <img
                    alt=''
                    src={props.profile.photos.large != null ? props.profile.photos.large : ava}/>
            </div>
            <div>
                <ProfileStatus
                    status={props.status}
                    updateStatus={props.updateStatus}/>

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
            </div>
            {props.isOwner &&
            <MyPostContainer/>}
        </div>

    )
};