import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DialogItem.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <li className={classes.dialog}>
            <figure className={classes.avatar}>
                <img src={props.img} alt="contact"></img>
            </figure>
            <NavLink to={path} className={classes.name}>{props.name}</NavLink>
        </li>
    );
};

export default DialogItem;