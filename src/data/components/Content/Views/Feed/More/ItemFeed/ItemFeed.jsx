import React from 'react';

import style from './ItemFeed.module.css';
import LikeItem from "../LikeItem/LikeItem";
import {NavLink} from "react-router-dom";

const ItemFeed = (props) => {

    return (
        <div className={style.body}>
            <NavLink to={'/profile/' + props.user} ><img src={props.avatar} alt={'avatar'} /></NavLink>
            <h4>{props.text}</h4>
            <LikeItem onLike={props.onLike} idLogin={props.idLogin} athor={props.user} count={props.likes} />
        </div>
    )
}

export default ItemFeed;