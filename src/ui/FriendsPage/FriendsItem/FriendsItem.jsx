import React from 'react';
import ava from '../../../img/ava.png';
import s from '../Friends.module.css'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {makeStyles} from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
        height: 100,
    }
}));


const FriendsItem = (props) => {

    let history = useHistory();

    const classes = useStyles();

    return (
        <React.Fragment>
            <ListItem className={classes.root} onClick={() => {
                history.push(`/profile/${props.friend.id}`)
            }} button>
                <ListItemAvatar>
                    <img alt=""
                         src={props.friend.photos.small != null ? props.friend.photos.small : ava} className={s.img}/>
                </ListItemAvatar>
                <ListItemText style={{padding: '10px'}} primary={props.friend.name}/>
                <div>
                    <IconButton aria-label="message" onClick={() => {
                        props.openDialogs(props.friend.id)
                    }}>
                        <EmailIcon/>
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => {
                        props.unFollowFriend(props.friend.id)
                    }}>
                        <DeleteIcon/>
                    </IconButton>
                </div>
            </ListItem>
        </React.Fragment>
    );
}

export default FriendsItem;