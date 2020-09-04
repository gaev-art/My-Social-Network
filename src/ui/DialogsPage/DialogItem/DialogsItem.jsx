import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import ava from '../../../img/ava.png';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Badge from '@material-ui/core/Badge';

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
                    <ListItem button onClick={onClickHandler}>
                        <ListItemIcon>
                            <img
                                alt=''
                                src={props.dialogs.photos.small != null ? props.dialogs.photos.small : ava}
                                className={s.img}
                            />
                        </ListItemIcon>
                        <div>
                            {props.dialogs.hasNewMessages > 0
                                ?
                                <Badge color="secondary" variant="dot">{props.dialogs.userName}</Badge>
                                : <>{props.dialogs.userName}</>
                            }
                        </div>
                    </ListItem>
                </NavLink>
            </List>
        </div>


    )
}

export default DialogItem;

