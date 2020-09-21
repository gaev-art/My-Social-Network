import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const Post = (props) => {
    return (
        <ListItem style={{textAlign: 'center'}}>
                <Avatar alt="" src={props.photo}/>
            <ListItemText primary={props.fullName} secondary={props.post.message}/>
            <IconButton aria-label="delete" onClick={() => {
                props.deletePost(props.post.id)
            }}>
                <DeleteIcon/>
            </IconButton>
        </ListItem>
    )
}

export default Post;