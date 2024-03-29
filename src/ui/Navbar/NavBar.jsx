import React from 'react';
import style from './Navbar.module.css'
import {NavLink} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PeopleIcon from '@material-ui/icons/People';
import Badge from '@material-ui/core/Badge';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));


export default props => {
    const classes = useStyles();

    return (
        <div className={`${classes.root} ${style.nav}`}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <ListItemIcon>
                        <AccountBoxIcon/>
                    </ListItemIcon>
                    <div className={style.item}>
                        <NavLink to='/profile' activeClassName={style.activeLink}>Profile</NavLink>
                    </div>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <PeopleIcon/>
                    </ListItemIcon>
                    <div className={style.item}>
                        <NavLink to='/friends' activeClassName={style.activeLink}>Friends</NavLink>
                    </div>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <EmailIcon/>
                    </ListItemIcon>
                    <div className={style.item}>
                        {props.newMessagesCount > 0
                            ? <Badge badgeContent={props.newMessagesCount} color="secondary">
                                <NavLink to='/dialogs' activeClassName={style.activeLink}>Dialogs</NavLink>
                            </Badge> : <NavLink to='/dialogs' activeClassName={style.activeLink}>Dialogs</NavLink>}
                    </div>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <PeopleIcon/>
                    </ListItemIcon>
                    <div className={style.item}>
                        <NavLink to='/users' activeClassName={style.activeLink}>Users</NavLink>
                    </div>
                </ListItem>
            </List>
        </div>
    );
}
