import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} img={dialog.img} />);
    let messagesElements = props.state.messages.map(message => <Message key={message.id} message={message.message} user={message.user} avatar={message.avatar} currentUser={props.currentUser} />);

    const sendMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    const onMessageChange = (event) => {
        const text = event.currentTarget.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    };

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.messages}>
                    {messagesElements}
                </div>
                <div className={classes.dialogsItems}>
                    <h4 className={classes.heading}>DIALOGS</h4>
                    <ul className={classes.dialogsList}>
                        {dialogsElements}
                    </ul>
                </div>
                <div>
                    <textarea onChange={onMessageChange} value={props.state.newMessageText}></textarea>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;