import MyPost from './MyPost';
import {connect} from 'react-redux';
import {addPost, deletePost,} from '../../../bll/profileReducer';


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        photo: state.profilePage.profile.photos.large,
        fullName: state.profilePage.profile.fullName,
    }
}

const MyPostContainer = connect(mapStateToProps, {addPost, deletePost})(MyPost);

export default MyPostContainer;