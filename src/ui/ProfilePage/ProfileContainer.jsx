import React from 'react';
import {Profile} from './Profile';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {
    getUsersProfile,
    savePhoto,
    saveProfile,
    setEditMode,
    setStatus,
    updateStatus
} from '../../bll/profileReducer';
import {withRouter} from 'react-router-dom';
import {WithAuthRedirect} from '../Hoc/WithAuthRedirect';


class ProfileContainer extends React.Component {

    refreshProfile = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUsersProfile(userId)
        this.props.setStatus(userId)
    }


    componentDidMount() {
        this.refreshProfile()

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }


    render() {
        return <Profile
            {...this.props}
            profile={this.props.profile}
            isOwner={!this.props.match.params.userId}/>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        editMode: state.profilePage.editMode,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth,

    }
}

export default compose(
    connect(mapStateToProps, {getUsersProfile, setEditMode, setStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)