import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
import FriendItem from './FriendItem/FriendItem';

const Navbar = (props) => {
    let friendElements = props.state.friends.map(friend => <FriendItem key={friend.id} name={friend.name} img={friend.avatar} />)

    return (
        <nav className={classes.nav}>
            <div className={classes.navWrap}>
                <ul>
                    <li className={classes.item}>
                        <NavLink to='/profile' activeClassName={classes.activeLink} className={classes.menuItem}>Profile</NavLink>
                    </li>
                    <li className={classes.item}>
                        <NavLink to='/dialogs' activeClassName={classes.activeLink} className={classes.menuItem}> Dialogs</NavLink>
                    </li>
                    <li className={classes.item}>
                        <NavLink to='/news' activeClassName={classes.activeLink} className={classes.menuItem}> News</NavLink>
                    </li>
                    <li className={classes.item}>
                        <NavLink to='/music' activeClassName={classes.activeLink} className={classes.menuItem}> Music</NavLink>
                    </li>
                    <li className={classes.item}>
                        <NavLink to='/settings' activeClassName={classes.activeLink} className={classes.menuItem}> Settings</NavLink>
                    </li>
                </ul>
            </div>
            <div className={classes.navWrap}>
                <div className={classes.caption}>Friends</div>
                <div className={classes.friendsWrap}>
                    {friendElements}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;