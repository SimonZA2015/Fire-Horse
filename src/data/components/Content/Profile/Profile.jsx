import React from 'react';

import style from "./Profile.module.css";

const Profile = () => {

    return (
        <div>
            <img className={style.banner} src='https://cdn.hipwallpaper.com/i/24/81/kajKoz.jpg' alt='' />
            <div className={style.profileInfo}>
                <img className={style.avatar} src={'http://ytimg.googleusercontent.com/vi/tEeZupPS5fw/hqdefault.jpg'} />
                <div className={style.infoBlock} ></div>
            </div>
        </div>
    )
}

export default Profile
