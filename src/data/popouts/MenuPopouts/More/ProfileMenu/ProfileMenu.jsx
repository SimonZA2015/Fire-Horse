import React from "react";
import AvatarProfileMenu from "./More/AvatarProfileMenu/AvatarProfileMenu";

import style from './ProfileMenu.module.css';

const ProfileMenu = (props) => {

    return (
        <div className={style.body}>
            <AvatarProfileMenu image={props.image} />
            <h4>{props.name}</h4>
        </div>
    )
};

export default ProfileMenu;