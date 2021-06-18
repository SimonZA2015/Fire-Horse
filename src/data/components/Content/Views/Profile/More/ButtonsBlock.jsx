import React from 'react';
import {NavLink} from "react-router-dom";

import style from './styles/ButtonsBlock.module.css';

const ButtonsBlock = (props) => {

    let button1 = <NavLink className={style.nav} to={'/dialogs/' + (props.id - 1)} ><div className={style.button}>Send message</div></NavLink>
    if (props.id === props.iam) {
        button1 = <NavLink className={style.nav} to={'/sittings/account'} ><div className={style.button}>Edit profile</div></NavLink>
    }

    return (
        <div className={style.body + ' ' + props.className}>
            {button1}
            <NavLink className={style.nav} to={'/friends/' + props.id} ><div className={style.button}>Friends</div></NavLink>
        </div>
    )
}

export default ButtonsBlock;