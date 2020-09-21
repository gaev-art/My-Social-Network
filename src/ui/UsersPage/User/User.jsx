import React from 'react';
import style from './User.module.css'
import ava from '../../../img/ava.png'
import {NavLink} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

function ScrollTop(props) {
    const classes = useStyles();
    const {children, window} = props;

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
        if (anchor) {
            anchor.scrollIntoView({behavior: 'smooth', block: 'center'});
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}

const User = (props) => {

    const path = '/profile/' + props.user.id;

    return (<>
            <div className={style.root}>
                <NavLink to={path}>
                    <img
                        alt=''
                        src={props.user.photos.small != null
                            ? props.user.photos.small : ava}
                        className={style.img}/>
                    <div>{props.user.name}</div>
                </NavLink>
                <div>
                    {props.user.followed
                        ? <IconButton
                            aria-label="unFollow"
                            disabled={props.followingInProgress
                                .some(id => id === props.user.id)}
                            onClick={() => {
                                props.unFollow(props.user.id)
                            }}>Unsubscribe</IconButton>
                        : <IconButton
                            aria-label="follow"
                            disabled={props.followingInProgress
                                .some(id => id === props.user.id)}
                            onClick={() => {
                                props.follow(props.user.id)
                            }}>Subscribe</IconButton>}
                </div>
            </div>
            <ScrollTop {...props}>
                <IconButton style={{border: 'inherit'}} color={'secondary'}>
                    <KeyboardArrowUpIcon/>
                </IconButton>
            </ScrollTop>
        </>
    )
}


export default User;

