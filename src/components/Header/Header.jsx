import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8hdQI3u-3Vu6TVULMGI_XMMTyn6CPLzBWPQ&usqp=CAU' alt="logo" />
        </header>
    );
};

export default Header;