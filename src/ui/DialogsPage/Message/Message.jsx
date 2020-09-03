import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const Message = (props) => {


    // const data = new Date(props.message.addedAt).toLocaleString()

    const onClickHandler = () => {
        props.deleteMessage(props.message.id)

    }

    return (
        <React.Fragment>
            <ListItem style={{width: '100%'}} button>
                {/*<ListItemAvatar>*/}
                {/*    <Avatar alt="Profile Picture" src={props.avatar} />*/}
                {/*</ListItemAvatar>*/}
                <ListItemText primary={props.message.senderName} secondary={props.message.body}/>
                <IconButton edge="end" aria-label="delete" onClick={onClickHandler}>
                    <DeleteIcon/>
                </IconButton>

            </ListItem>
        </React.Fragment>
    )
}


export default Message;

