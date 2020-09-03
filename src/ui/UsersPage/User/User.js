import React from 'react';
import style from '../Users.module.css'
import ava from '../../../img/ava.png'
import {useHistory} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles} from '@material-ui/core/styles';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
        height: 100,
    }
}));

const User = (props) => {

    let history = useHistory();

    const classes = useStyles();
    return (

        <React.Fragment>
            <ListItem className={classes.root} onClick={() => {
                history.push(`/profile/${props.user.id}`)
            }} button>
                <ListItemAvatar>
                    <img alt=""
                         src={props.user.photos.small != null ? props.user.photos.small : ava} className={style.img}/>
                </ListItemAvatar>
                <ListItemText style={{padding: '10px'}} primary={props.user.name}/>
                {props.user.followed
                    ? <RemoveIcon
                        disabled={props.followingInProgress
                            .some(id => id === props.user.id)}
                        onClick={() => {
                            props.unFollow(props.user.id)
                        }}>
                        UnFollow
                    </RemoveIcon>
                    : <AddIcon
                        disabled={props.followingInProgress
                            .some(id => id === props.user.id)}
                        onClick={() => {
                            props.follow(props.user.id)
                        }}>
                        Follow
                    </AddIcon>}
            </ListItem>
        </React.Fragment>
    )
}


export default User;

