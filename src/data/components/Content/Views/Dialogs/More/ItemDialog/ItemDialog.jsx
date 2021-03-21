import React from 'react';
import {NavLink} from "react-router-dom";

import style from './ItemDialog.module.css'

const ItemDialog = (props) => {

    return (
        <NavLink className={style.navL} to={'/dialogs/' + props.id}><div onClick={() => props.onClick(props.id)} className={style.body}>
            <img src={props.image} alt='' />
            <div><span>{props.name}</span></div>
        </div></NavLink>
    )
}

export default ItemDialog;