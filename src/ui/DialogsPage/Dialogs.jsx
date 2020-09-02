import React, {useEffect} from 'react';
import s from './Dialogs.module.css';
import {useHistory} from 'react-router-dom'
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {AddMessageFormRedux} from './AddMessageForm';
import PreloaderInit from '../common/Preloaders/PreloaderForInit';


const Dialogs = (props) => {

    let history = useHistory();

    useEffect(() => {
        if (!!props.userId) {
            history.push('.')
        }
    }, [])

    const dialogsElement = props.dialogs.map(d => <DialogItem
        key={d.id}
        dialogs={d}
        getMessages={props.getMessages}
        userId={props.userId}/>);

    const messagesElement = props.messages.map(m => {
        if (m.senderName === props.login) {
            return <Message
                avatar={props.profile.photos.small}
                key={m.id}
                message={m}
                userId={props.userId}
                deleteMessage={props.deleteMessage}/>
        }else {
            let user = props.dialogs.find(d => {

                if (d.id == props.userId) {
                    return d
                }
            })
            return  <Message
                avatar={user.photos.small}
                key={m.id}
                message={m}
                userId={props.userId}
                deleteMessage={props.deleteMessage}/>


        }
    });


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <h3>Dialogs:</h3>
                {props.loadingDialogs ? <PreloaderInit/> :
                    <div>
                        {dialogsElement}
                    </div>
                }
            </div>
            <div className={s.messages}>
                <h3>Messages:</h3>
                {props.messages.length < props.currentDialogsMessagesCount && <button>show prev</button>}
                {props.currentDialogsId && <div className={s.message}>
                    {props.loadingMessages ? <PreloaderInit/> : <>{messagesElement}</>}
                    <div>
                        <AddMessageFormRedux onSubmit={props.addNewMessage}/>
                    </div>
                </div>}
                {!props.currentDialogsId && <b>Please select dialog</b>}
            </div>
        </div>
    )
};


export default Dialogs;

