import React from 'react';
import s from './Message.module.css'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const Message = (props) => {


    const data = new Date(props.message.addedAt).toLocaleString()

    const onClickHandler = () => {
        props.deleteMessage(props.message.id)

    }

    return (

        <React.Fragment>
            <ListItem style={{width:'100%'}} button>
                <ListItemAvatar>
                    <Avatar alt="Profile Picture" />
                </ListItemAvatar>
                <ListItemText primary={props.message.senderName} secondary={props.message.body}/>
                <IconButton edge="end" aria-label="delete" onClick={onClickHandler} secondary={data}>
                    <DeleteIcon />
                </IconButton>

            </ListItem>
        </React.Fragment>

        // <div id='main' className={style.main}>
        //     <div className={style.message}>
        //         <div className={style.mainBtn}>
        //             <button
        //                 className={style.deleteBtn}
        //                 onClick={onClickHandler}>x
        //             </button>
        //         </div>
        //         <b className={style.name}>{props.message.senderName}:</b>{props.message.body}
        //         <div className={style.mainTime}>
        //             <p className={style.time}>{data}</p>
        //         </div>
        //
        //     </div>
        // </div>
    )
}


export default Message;

