import React from 'react';
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsConrols/FormControls';
import Button from '@material-ui/core/Button';

let maxLength10 = maxLengthCreator(100)

function AddNewPost(props) {
    return <form onSubmit={props.handleSubmit}>
        <Field
            validate={[required, maxLength10]}
            component={Textarea}
            name={'newPostText'}
            placeholder='Enter your post'/>
        <div>
            <Button color="secondary" type="submit">Add post</Button>
        </div>
    </form>;
}

let AddNewPostForm = reduxForm({form: 'profileAddNewPostForm'})(AddNewPost)

const MyPost = React.memo((props) => {


    let postsElement = props.posts.map((p) =>
        <Post
            deletePost={props.deletePost}
            fullName={props.fullName}
            photo={props.photo}
            key={p.id}
            post={p}/>)


    let addPost = (values) => {
        props.addPost(values.newPostText);
    }


    return (
        <div>
            <h3>My post</h3>
            <AddNewPostForm onSubmit={addPost}/>
            {postsElement}
        </div>
    )
});

export default MyPost;