import React from 'react';
import {NavLink} from "react-router-dom";

import style from './HeaderSittings.module.css';

const HeaderSittings = () => {

    return (
        <div className={style.body}>
            <div><NavLink activeClassName={style.active} className={style.nav} to='/sittings/account' >Account</NavLink></div>
            <div><NavLink activeClassName={style.active} className={style.nav} to='/sittings/privacy' >Privacy</NavLink></div>
            <div>More</div>
        </div>
    )
}

export default HeaderSittings;