import React from "react";

import style from './ItemMenu.module.css';
import {NavLink} from "react-router-dom";

const ItemMenu = (props) => {

    return (
        <div className={style.body}>
            <NavLink onClick={props.close} className={style.nav} to={props.path} ><h4>{props.name}</h4></NavLink>
        </div>
    )
};

export default ItemMenu;