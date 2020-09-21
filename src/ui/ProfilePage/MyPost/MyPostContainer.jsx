import MyPost from './MyPost';
import {connect} from 'react-redux';
import {addPost, deletePost,} from '../../../bll/profileReducer';
import React from 'react';

const MyPostContainer = props => {
    return <MyPost {...props}/>
}


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        photo: state.profilePage.profile.photos.large,
        fullName: state.profilePage.profile.fullName,
        profile: state.profilePage.profile,
    }
}

export default connect(mapStateToProps, {addPost, deletePost})(MyPostContainer);
