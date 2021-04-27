import React from 'react';

import style from './HeaderSittings.module.css';
import {NavLink} from "react-router-dom";

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