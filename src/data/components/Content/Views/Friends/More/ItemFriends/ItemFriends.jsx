import React from "react";
import {NavLink} from "react-router-dom";

import style from './ItemFriends.module.css';

const ItemFriends = (props) => {

    return (
        <NavLink className={style.nav} to={'/profile/' + props.id + '/'}>
            <div className={style.body}>
                <div className={style.avatar}>
                    <img src={props.avatar}
                         alt={"friend" + props.id}/>
                </div>
                <div>
                    <h4>{props.name}</h4>
                    <span>{props.city}</span>
                </div>
            </div>
        </NavLink>
    )
}

export default ItemFriends;