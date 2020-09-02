import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const Post = (props) => {
    return (
        <React.Fragment>
            <ListItem button>
                <ListItemAvatar>
                    <Avatar alt="" src={props.photo}/>
                </ListItemAvatar>
                <ListItemText primary={props.fullName} secondary={props.post.message}/>
                <IconButton edge="end" aria-label="delete" onClick={() => {
                    props.deletePost(props.post.id)
                }}>
                    <DeleteIcon/>
                </IconButton>
            </ListItem>
        </React.Fragment>
    )
}

export default Post;