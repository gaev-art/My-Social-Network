import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import ava from '../../../img/ava.png';
import newMessage from '../../../img/newMessage.png';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));


const DialogItem = (props) => {

    const classes = useStyles();
    const path = '/dialogs/' + props.dialogs.id;


    const onClickHandler = () => {
        props.getMessages(props.dialogs.id)
    }


    return (
        <div className={`${classes.root}`}>
            <List>
                <NavLink to={path} activeClassName={s.activeLink}>
                    <ListItem button  onClick={onClickHandler}>
                        <ListItemIcon>
                            <img
                                alt=''
                                src={props.dialogs.photos.small != null ? props.dialogs.photos.small : ava}
                                className={s.img}
                               />
                        </ListItemIcon>
                        <div>                                            {/* добавить стиль !!!*/}
                            {props.dialogs.userName}
                            {props.dialogs.hasNewMessages > 0 &&
                            <img alt='' src={newMessage} className={s.icon}/>}
                        </div>
                    </ListItem>
                </NavLink>
            </List>
        </div>
        // <div>
        //     <NavLink to={path} activeClassName={s.activeLink}>
        //         <img
        //             src={props.dialogs.photos.small != null ? props.dialogs.photos.small : ava}
        //             className={s.img}
        //             onClick={onClickHandler}/>
        //         {props.dialogs.userName}
        //         {props.dialogs.hasNewMessages > 0 &&
        //         <img src={newMessage} className={s.icon}/>}
        //     </NavLink>
        // </div>

    )
}

export default DialogItem;

