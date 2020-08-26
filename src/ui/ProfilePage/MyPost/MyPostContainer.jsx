import React from 'react';
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {addPost, deletePostsProfile} from '../../../bll/profileReducer';


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        photo: state.profilePage.profile.photos.large,
        fullName: state.profilePage.profile.fullName,
    }
}

const MyPostContainer = connect(mapStateToProps, {addPost,deletePostsProfile})(MyPost);

export default MyPostContainer;