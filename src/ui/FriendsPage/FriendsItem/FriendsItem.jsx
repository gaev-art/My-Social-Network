import React from 'react';
import ava from '../../../img/ava.png';
import style from './Friend.module.css';
import IconButton from '@material-ui/core/IconButton';
import EmailIcon from '@material-ui/icons/Email';
import {NavLink} from 'react-router-dom';


const FriendsItem = (props) => {

    const path = '/profile/' + props.friend.id;


    return (<>
        <div className={style.root}>
            <NavLink to={path} activeClassName={style.activeLink}>
                            <img
                                alt=''
                                src={props.friend.photos.small != null
                                    ? props.friend.photos.small : ava}
                                className={style.img}/>
                <div>{props.friend.name}</div>
            </NavLink>
            <div className={style.icon}>
                <IconButton aria-label="message" onClick={() => {
                    props.openDialogs(props.friend.id)
                }}>
                    <EmailIcon/>
                </IconButton>
                <IconButton aria-label="delete" onClick={() => {
                    props.unFollowFriend(props.friend.id)
                }}>
                    Unsubscribe
                </IconButton>
            </div>
        </div>
        </>
    );
}

export default FriendsItem;