import React from 'react';

import style from './ItemFeed.module.css';
import LikeItem from "../LikeItem/LikeItem";

const ItemFeed = (props) => {

    return (
        <div className={style.body}>
            <img src={props.avatar} onClick={() => window.location.href='profile/' + props.user} alt={'avatar'} />
            <h4>{props.text}</h4>
            <LikeItem onLike={props.onLike} idLogin={props.idLogin} athor={props.user} count={props.likes} />
        </div>
    )
}

export default ItemFeed;