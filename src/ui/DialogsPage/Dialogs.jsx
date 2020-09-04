import s from './Dialogs.module.css';
import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DialogItem from './DialogItem/DialogsItem';
import PreloaderInit from '../common/Preloaders/PreloaderForInit';
import {AddMessageFormRedux} from './AddMessageForm';
import Message from './Message/Message';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'center',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export default function Dialogs(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const dialogsElement = props.dialogs.map(d => <DialogItem
        key={d.id}
        dialogs={d}
        getMessages={props.getMessages}
        userId={props.userId}/>);

    const messagesElement = props.messages.map(m => {
        return <Message
            key={m.id}
            message={m}
            userId={props.userId}
            deleteMessage={props.deleteMessage}/>
    });

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={s.dialogs}>

            <Drawer
                className={`${classes.drawer} ${s.dialogsItems}`}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </div>

                <List>
                    {props.loadingDialogs ? <PreloaderInit/> :
                        <div>{dialogsElement}</div>}
                </List>
                <Divider/>
            </Drawer>
            <Typography color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.hide)}
                        variant="h6"> Click to select dialog</Typography>

            <div className={`${s.messages} ${classes.drawerHeader} `}>

                {props.messages.length < props.currentDialogsMessagesCount && <button>show prev</button>}
                {props.currentDialogsId && <div className={s.message}>
                    {props.loadingMessages ? <PreloaderInit/> : <>{messagesElement}</>}
                    <div>
                        <AddMessageFormRedux onSubmit={props.addNewMessage}/>
                    </div>
                </div>}
            </div>

        </div>
    );
}
