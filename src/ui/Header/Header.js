import React from 'react';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import s from '../Navbar/Navbar.module.css';
import ListItem from '@material-ui/core/ListItem';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PeopleIcon from '@material-ui/icons/People';
import EmailIcon from '@material-ui/icons/Email';
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    nav: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            justifyContent: 'space-between',
        },
    },
    sectionMobile: {
        display: 'flex',

        [theme.breakpoints.up('md')]: {
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
            <ListItem button>
                <ListItemIcon>
                    <AccountBoxIcon/>
                </ListItemIcon>
                <div className={s.item}>
                    <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
                </div>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <SentimentVerySatisfiedIcon/>
                </ListItemIcon>
                <div className={s.item}>
                    <NavLink to='/friends' activeClassName={s.activeLink}>Friends</NavLink>
                </div>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    {props.newMessagesCount > 0
                        ? <Badge badgeContent={props.newMessagesCount} color="secondary">
                            <EmailIcon/>
                        </Badge> : <EmailIcon/>}
                </ListItemIcon>
                <div className={s.item}>
                    <NavLink to='/dialogs' activeClassName={s.activeLink}>Dialogs</NavLink>
                </div>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <PeopleIcon/>
                </ListItemIcon>
                <div className={s.item}>
                    <NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
                </div>
            </ListItem>
            <Divider/>
            <ListItem button>
                <ListItemIcon>
                    <ExitToAppIcon/>
                </ListItemIcon>
                {props.isAuth &&
                <div className={s.item}>
                    <NavLink to={'/login'} activeClassName={s.activeLink} onClick={props.logout}>Logout</NavLink>
                </div>}
            </ListItem>
        </Menu>

    );


    const [value, setValue] = React.useState(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.grow}>
            <AppBar color="inherit">
                <Toolbar>
                    <Typography variant="h6">
                        My Social Network
                    </Typography>
                        <Tabs
                            className={classes.nav}
                            value={value}
                            onChange={handleChange}
                            variant="fullWidth"
                            indicatorColor="secondary"
                            textColor="secondary"
                            aria-label="icon tabs example">
                            <div className={s.item}>
                                <NavLink to='/profile' activeClassName={s.activeLink}>
                                    <Tab icon={<AccountBoxIcon/>} label="Profile"/>
                                </NavLink>
                            </div>
                            <div className={s.item}>
                                <NavLink to='/friends' activeClassName={s.activeLink}>
                                    <Tab icon={<SentimentVerySatisfiedIcon/>} label="Friends"/>
                                </NavLink>
                            </div>
                            <div className={s.item}>
                                <NavLink to='/dialogs' activeClassName={s.activeLink}>
                                    <Tab
                                        icon={props.newMessagesCount > 0
                                            ? <Badge badgeContent={props.newMessagesCount} color="secondary">
                                                <EmailIcon/>
                                            </Badge> : <EmailIcon/>}
                                        label="Dialogs"/>
                                </NavLink>
                            </div>
                            <div className={s.item}>
                                <NavLink to='/users' activeClassName={s.activeLink}>
                                    <Tab icon={<PeopleIcon/>} label="Users"/>
                                </NavLink>
                            </div>
                        </Tabs>
                    <div className={classes.grow}/>
                    <div className={classes.sectionDesktop}>
                        {props.isAuth ?
                            <Button onClick={props.logout} color="inherit">Logout</Button>
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