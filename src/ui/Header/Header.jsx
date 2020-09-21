import React from 'react';
import {NavLink} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import style from './Header.module.css';
import ListItem from '@material-ui/core/ListItem';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PeopleIcon from '@material-ui/icons/People';
import EmailIcon from '@material-ui/icons/Email';
import Divider from '@material-ui/core/Divider';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';


const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 2,

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    nav: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            justifyContent: 'space-between',
        },
    },
    root: {
        flexGrow: 1,
        maxWidth: 500,
    },
    sectionMobile: {
        display: 'flex',

        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
}));


export default function Header(props) {


    const classes = useStyles();

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };


    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };


    const mobileMenuId = 'primary-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}>
            <ListItem onClick={handleMobileMenuClose} button>
                <ListItemIcon>
                    <AccountBoxIcon/>
                </ListItemIcon>
                <div className={style.item}>
                    <NavLink to='/profile' activeClassName={style.activeLink}>Profile</NavLink>
                </div>
            </ListItem>
            <ListItem onClick={handleMobileMenuClose} button>
                <ListItemIcon>
                    <SentimentVerySatisfiedIcon/>
                </ListItemIcon>
                <div className={style.item}>
                    <NavLink to='/friends' activeClassName={style.activeLink}>Friends</NavLink>
                </div>
            </ListItem>
            <ListItem onClick={handleMobileMenuClose} button>
                <ListItemIcon>
                    {props.newMessagesCount > 0
                        ? <Badge badgeContent={props.newMessagesCount} color="secondary">
                            <EmailIcon/>
                        </Badge> : <EmailIcon/>}
                </ListItemIcon>
                <div className={style.item}>
                    <NavLink to='/dialogs' activeClassName={style.activeLink}>Dialogs</NavLink>
                </div>
            </ListItem>
            <ListItem onClick={handleMobileMenuClose} button>
                <ListItemIcon>
                    <PeopleIcon/>
                </ListItemIcon>
                <div className={style.item}>
                    <NavLink to='/users' activeClassName={style.activeLink}>Users</NavLink>
                </div>
            </ListItem>
            <Divider/>
            <ListItem onClick={handleMobileMenuClose} button>
                <ListItemIcon>
                    <ExitToAppIcon/>
                </ListItemIcon>
                {props.isAuth &&
                <div className={style.item}>
                    <NavLink to={'/login'} activeClassName={style.activeLink} onClick={props.logout}>Logout</NavLink>
                </div>}
            </ListItem>
        </Menu>
    );


    return (
        <div className={classes.grow}>
            <AppBar color="inherit">
                <Toolbar>
                    <Typography variant={'h6'}>My Social Network</Typography>
                    <div className={classes.grow}/>
                    <List className={style.nav}>
                        <div className={style.item}>
                            <NavLink to='/profile' activeClassName={style.activeLink}>
                                <ListItem button>Profile</ListItem>
                            </NavLink>
                        </div>
                        <div className={style.item}>
                            <NavLink to='/friends' activeClassName={style.activeLink}>
                                <ListItem button>Friends</ListItem>
                            </NavLink>
                        </div>
                        <div className={style.item}>
                            <NavLink to='/dialogs' activeClassName={style.activeLink}>
                                <ListItem button>
                                    {props.newMessagesCount > 0
                                        ? <Badge badgeContent={props.newMessagesCount} color="secondary">
                                            Dialogs
                                        </Badge>
                                        : <>Dialogs</>}
                                </ListItem>
                            </NavLink>
                        </div>
                        <div className={style.item}>
                            <NavLink to='/users' activeClassName={style.activeLink}>
                                <ListItem button>Users</ListItem>
                            </NavLink>
                        </div>
                    </List>
                    <div className={classes.grow}/>
                    <div className={`${classes.sectionDesktop} ${style.item}`}>
                        {props.isAuth ?
                            <NavLink to='/login' activeClassName={style.activeLink}>
                                <ListItem button onClick={props.logout} color="inherit">
                                    <div className={style.item}>
                                        Logout
                                    </div>
                                </ListItem>
                            </NavLink>
                            : ''}
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </div>
    );
}

