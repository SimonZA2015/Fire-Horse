import React from "react";
import ItemFriends from "./More/ItemFriends/ItemFriends";

import style from './Friends.module.css'


const GetProfilesActionCreate = () => ({type: 'GET-PROFILES'});

const GetLoginActionCreate = () => ({type: 'GET-LOGIN'});


const Friends = ({props}) => {

    const profileInfo = props.dispatch(GetProfilesActionCreate);
    let id = parseInt((window.location.pathname).split('/')[2]);
    if (isNaN(id)) {
        id = props.dispatch(GetLoginActionCreate);
    }

    let friends = [];
    for (let i = 0; i < profileInfo[id].friends.length; i++) {
        friends.push(profileInfo[id].friends[i])
    }

    return (
        <div className={style.body}>
            {friends.map((data) => (
                <ItemFriends
                    name={profileInfo[data].name}
                    avatar={profileInfo[data].image}
                    city={profileInfo[data].city}
                    id={data}
                />
            ))}
        </div>
    )
}

export default Friends;