import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={classes.content}>
            <img src='https://mymodernmet.com/wp/wp-content/uploads/2020/12/NPOTY-Photo-Contest-2020-Hope-in-a-Burned-Forest-JoAnne-McArthur-Winner-C8-Man-and-Nature.jpg' alt="cover" />
            <div>ava + description</div>
        </div>
    );
};

export default ProfileInfo;