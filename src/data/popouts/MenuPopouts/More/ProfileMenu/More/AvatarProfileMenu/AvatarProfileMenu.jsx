import React from "react";

import style from './AvatarProfileMenu.module.css';

const AvatarProfileMenu = (props) => {

    return (
        <div className={style.body}>
            <div />
            <img src={props.image} alt={'profile_menu'} />
        </div>
    )
};

export default AvatarProfileMenu;