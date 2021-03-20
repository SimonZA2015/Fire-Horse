import React from 'react';
import {NavLink} from "react-router-dom";

import style from './styles/Button.module.css';

const Button = (props) => {

    return (
        <NavLink to={props.url} ><div className={style.body}><text>{props.text}</text></div></NavLink>
    )
}

export default Button;