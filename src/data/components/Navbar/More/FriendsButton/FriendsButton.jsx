import React from 'react';
import {NavLink} from "react-router-dom";

import style from './FriendsButton.module.css';

const FriendsButton =  (props) => {

    return (
        <NavLink to={props.url} className={style.nav} activeClassName={style.active} >
            <div className={style.body}>
                <div className={style.blockText}><text>{props.text}</text></div>
                <div className={style.blockAvatars}>
                    {props.profile[props.id].friends && props.profile[props.id].friends.map((data) => (
                        <NavLink activeClassName={style.active} className={style.avatarFriend} to={'/profile/' + data }><img src={props.profile[data].image } alt='' /></NavLink>
                        ))}
                </div>
            </div>
        </NavLink>
    )
}

export default FriendsButton;