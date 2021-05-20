import React from 'react';
import classes from './FriendItem.module.css';

const FriendItem = (props) => {
    return (
        <div className={classes.friend}>
            <img className={classes.avatar} src={props.img} alt="avatar"></img>
            <div className={classes.friendName}>{props.name}</div>
        </div>
    );
};

export default FriendItem;