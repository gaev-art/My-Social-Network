import s from './Dialogs.module.css';
import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DialogItem from './DialogItem/DialogsItem';
import PreloaderInit from '../common/Preloaders/PreloaderForInit';
import {AddMessageFormRedux} from './AddMessageForm';
import Message from './Message/Message';
import clsx from 'clsx';

const drawerWidth = 240;

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
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
        justifyContent: 'center',
    }
}));

export default function Dialogs(props) {

    const classes = useStyles();

    const theme = useTheme();

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    const dialogsElement = props.dialogs.map(d => <DialogItem
        handleDrawerClose={handleDrawerClose}
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


    return (
        <div className={s.dialogs}>

            <Drawer
                className={`${classes.drawer}`}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon color={'secondary'}/> : ''}
                    </IconButton>
                </div>

                <List>
                    {props.loadingDialogs ? <PreloaderInit/> :
                        <div>{dialogsElement}</div>}
                </List>
                <Divider/>
            </Drawer>


            <div className={`${s.messages}`}>
                <Typography color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            className={clsx(open && classes.hide)}
                            variant="h6"> Click to select dialog</Typography>
                {props.currentDialogsId && <div>
                    {props.loadingMessages ? <PreloaderInit/> : <>{messagesElement}</>}
                    <AddMessageFormRedux onSubmit={props.addNewMessage}/>
                </div>}
            </div>

        </div>
    );
}
