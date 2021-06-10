import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={classes.content}>
            <img className={classes.wallpaper} src='https://mymodernmet.com/wp/wp-content/uploads/2020/12/NPOTY-Photo-Contest-2020-Hope-in-a-Burned-Forest-JoAnne-McArthur-Winner-C8-Man-and-Nature.jpg' alt="cover" />
            <div className={classes.cardBody}>
                <img className={classes.avatar} src="https://i.pinimg.com/originals/8b/08/ed/8b08ed0cb7a60f9372a160fcbacb47b1.jpg" alt="my avatar" />
                description
            </div>
        </div>
    );
};

export default ProfileInfo;