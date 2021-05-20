import React from 'react';
import classes from './Message.module.css';

const Message = (props) => {
    return (
        <div className={`${classes.message} ${props.user === props.currentUser.name ? classes.currentUser : ''}`}>
            <div className={classes.messageUser}>
                <figure className={classes.avatar}>
                    <img alt="avatar" src={props.avatar}></img>
                </figure>
                <div className={classes.userName}>
                    {props.user}
                </div>
            </div>
            <div className={classes.text}>
                {props.message}
            </div>
        </div>
    );
};

export default Message;