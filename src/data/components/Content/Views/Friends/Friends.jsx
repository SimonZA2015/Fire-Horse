import React from "react";
import ItemFriends from "./More/ItemFriends/ItemFriends";

import style from './Friends.module.css'

const Friends = ({props}) => {

    let id = parseInt((window.location.pathname).split('/')[2]);
    if (isNaN(id)) {
        id = props.id;
    }

    let friends = [];
    for (let i = 0; i < props.profileInfo[id].friends.length; i++) {
        friends.push(props.profileInfo[id].friends[i])
    }

    return (
        <div className={style.body}>
            {friends.map((data) => (
                <ItemFriends name={props.profileInfo[data].name} avatar={props.profileInfo[data].image} city={props.profileInfo[data].city} id={data} />
            ))}
        </div>
    )
}

export default Friends;