import React from 'react';
import style from './DialogItem.module.css';
import {NavLink} from 'react-router-dom';
import ava from '../../../img/ava.png';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Badge from '@material-ui/core/Badge';


const DialogItem = (props) => {

    const path = '/dialogs/' + props.dialogs.id;


    const onClickHandler = () => {
        props.getMessages(props.dialogs.id)
    }


    return (
        <List onClick={props.handleDrawerClose} className={style.dialogsItems}>
            <NavLink to={path} activeClassName={style.activeLink}>
                <ListItem button onClick={onClickHandler}>
                    <ListItemIcon>
                        <img
                            alt=''
                            src={props.dialogs.photos.small != null ? props.dialogs.photos.small : ava}
                            className={style.img}/>
                    </ListItemIcon>
                    <div>
                        {props.dialogs.hasNewMessages > 0
                            ? <Badge color="secondary" variant="dot">
                                {props.dialogs.userName}
                            </Badge>
                            : <>{props.dialogs.userName}</>
                        }
                    </div>
                </ListItem>
            </NavLink>
        </List>
    )
}

export default DialogItem;

