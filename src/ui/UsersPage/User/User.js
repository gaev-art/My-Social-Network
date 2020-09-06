import React from 'react';
import style from './User.module.css'
import ava from '../../../img/ava.png'
import {NavLink} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';


const User = (props) => {

    const path = '/profile/' + props.user.id;

    return (
        <div className={style.root}>
        <List className={style.main}>
            <NavLink to={path} activeClassName={style.activeLink}>
                <ListItem style={{padding:'0px'}} button>
                        <img
                            alt=''
                            src={props.user.photos.small != null
                                ? props.user.photos.small : ava}
                            className={style.img}/>
                    <div className={style.name}>
                        {props.user.name}
                    </div>
                </ListItem>
            </NavLink>
            <div className={style.button}>
                {props.user.followed
                    ? <IconButton
                        style={{padding:'0px'}}
                        aria-label="unFollow"
                        disabled={props.followingInProgress
                            .some(id => id === props.user.id)}
                        onClick={() => {
                            props.unFollow(props.user.id)
                        }}>
                        <RemoveIcon>UnFollow</RemoveIcon>
                    </IconButton>
                    : <IconButton
                        style={{padding:'0px'}}
                        aria-label="follow"
                        disabled={props.followingInProgress
                            .some(id => id === props.user.id)}
                        onClick={() => {
                            props.follow(props.user.id)
                        }}>
                        <AddIcon>Follow</AddIcon>
                    </IconButton>}
            </div>
        </List>
        </div>
    )
}


export default User;

