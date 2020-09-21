import style from './Dialogs.module.css';
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import DialogItem from './DialogItem/DialogsItem';
import PreloaderInit from '../common/Preloaders/PreloaderForInit';
import Message from './Message/Message';
import {DialogAddMessageForm} from './AddMessageForm';


export default function Dialogs(props) {

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
        <div className={style.dialogs}>
            <Drawer
                className={style.drawer}
                variant="persistent"
                anchor="left"
                open={open}>
                <Typography
                    color="inherit"
                    aria-label="close drawer"
                    onClick={handleDrawerClose}
                    variant="h6"> Click to close dialog</Typography>
                <List>
                    {props.loadingDialogs ? <PreloaderInit/> :
                        <div>{dialogsElement}</div>}
                </List>
                <Divider/>
            </Drawer>
            <div className={style.messages}>
                {!open && <Typography
                    style={{margin: '30px'}}
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    variant="h6"> Click to select dialog</Typography>}
                {props.currentDialogsId && <div>
                    {props.loadingMessages ? <PreloaderInit/> : <>{messagesElement}</>}
                    <DialogAddMessageForm onSubmit={props.addNewMessage}/>
                </div>}
            </div>

        </div>
    );
}
