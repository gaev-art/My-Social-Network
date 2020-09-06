import React from 'react';
import ava from '../../../img/ava.png';
import style from './Friend.module.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import {NavLink} from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';


const FriendsItem = (props) => {

    const path = '/profile/' + props.friend.id;


    return (
        <div className={style.root}>
        <List className={style.main}>
            <NavLink to={path} activeClassName={style.activeLink}>
                <ListItem style={{padding:'0px'}} button>
                    <ListItemIcon>
                        <img
                            alt=''
                            src={props.friend.photos.small != null
                                ? props.friend.photos.small : ava}
                            className={style.img}/>
                    </ListItemIcon>
                        {props.friend.name}
                </ListItem>
            </NavLink>
            <div className={style.icon}>
                <IconButton style={{padding:'0px'}} aria-label="message" onClick={() => {
                    props.openDialogs(props.friend.id)
                }}>
                    <EmailIcon />
                </IconButton>
                <IconButton aria-label="delete" onClick={() => {
                    props.unFollowFriend(props.friend.id)
                }}>
                    <DeleteIcon/>
                </IconButton>
            </div>
        </List>
        </div>
    );
}

export default FriendsItem;