import React from 'react';
import ava from '../../img/ava.png'
import ProfileDataForm from './ProfileData/ProfileDataForm';
import {ProfileData} from './ProfileData/ProfileData';
import ProfileStatus from './Status/ProfileStatus';
import MyPostContainer from './MyPost/MyPostContainer';
import {makeStyles} from '@material-ui/core/styles';
import PreloaderInit from '../common/Preloaders/PreloaderForInit';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: ' 1fr 1fr 1fr',
        // backgroundColor: "rgba(0, 0, 0, 0.04);",
        '& > *': {
            margin: theme.spacing(1),
            // width: theme.spacing(50),
            // height: theme.spacing(50),
            // backgroundColor: "rgba(0, 0, 0, 0.04);",
        }
    }
}));

export const Profile = (props) => {
    const classes = useStyles();

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
        <div className={` ${classes.root}`}>
            <div>
                <img
                    alt=''
                    src={props.profile.photos.large != null ? props.profile.photos.large : ava}/>
            </div>
            <div><ProfileStatus
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
                        }}/>}</div>
            <MyPostContainer profile={props.profile}/>
        </div>

    )
};