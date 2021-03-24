import React from 'react';
import {NavLink} from "react-router-dom";

import style from './Button.module.css';

const Button = (props) => {

    return (
        <NavLink className={style.nav} to={props.url} activeClassName={style.opened} ><div className={style.body}>
            <text>{props.text}</text>
        </div></NavLink>
    )
}

export default Button;