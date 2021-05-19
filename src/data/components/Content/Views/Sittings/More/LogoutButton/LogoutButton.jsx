import React from "react";

import style from './LogoutButton.module.css';

const LogoutButton = (props) => {

    return (
        <div className={style.body} onClick={props.logOut}>
            <h4>Log Out</h4>
        </div>
    )
}

export default LogoutButton;