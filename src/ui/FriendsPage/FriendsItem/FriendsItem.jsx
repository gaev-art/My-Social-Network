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

const useStyles = makeStyles((theme) => ({
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
        // <div className={`${classes.root}`}>
        //     <List>
        //         <NavLink to={`/profile/${props.friend.id}`} activeClassName={s.activeLink}>
        //             <ListItem button>
        //                 <ListItemIcon>
        //                     <img alt="Profile Picture"
        //                          src={props.friend.photos.small != null ? props.friend.photos.small : ava}
        //                          className={s.img}/>
        //                 </ListItemIcon>
        //                 <div>                                            {/* добавить стиль !!!*/}
        //                     {props.friend.name}
        //                     <IconButton edge="end" aria-label="message" onClick={() => {
        //                         props.openDialogs(props.friend.id)
        //                     }}>
        //                         <EmailIcon/>
        //                     </IconButton>
        //                     <IconButton edge="end" aria-label="delete" onClick={() => {
        //                         props.unFollowFriend(props.friend.id)
        //                     }}>
        //                         <DeleteIcon/>
        //                     </IconButton>
        //                 </div>
        //             </ListItem>
        //         </NavLink>
        //     </List>
        // </div>

        <React.Fragment>
            <ListItem className={classes.root} onClick={()=>{history.push(`/profile/${props.friend.id}`)}} button>
                <ListItemAvatar>
                    <img alt="Profile Picture"
                            src={props.friend.photos.small != null ? props.friend.photos.small : ava} className={s.img}/>
                </ListItemAvatar>
                <ListItemText style={{padding: '10px'}} primary={props.friend.name} />
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


        // <div className={s.main}>
        //     <NavLink to={`/profile/${props.friend.id}`}>
        //         <img alt='' src={props.friend.photos.small != null ? props.friend.photos.small : ava} className={s.img}/>
        //     </NavLink>
        //     <div>
        //         {props.friend.name}
        //     </div>
        //     <div>
        //         <button
        //             onClick={() => {
        //                 props.unFollowFriend(props.friend.id)
        //             }}>
        //             UnFollow
        //         </button>
        //         <button onClick={() => {
        //             props.openDialogs(props.friend.id)
        //         }}>open dialog
        //         </button>
        //
        //     </div>
        // </div>
    );
}

export default FriendsItem;