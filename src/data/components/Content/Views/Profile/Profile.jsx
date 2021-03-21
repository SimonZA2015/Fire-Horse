import React from 'react';

import Banner from "./More/ProfileBanner";
import ProfileInfo from "./More/ProfileInfo";
import ProfilePosts from "./More/ProfilePosts";

import style from "./Profile.module.css";
import {profile} from "../../../../base/info";

const Profile = (props) => {

    let id = 0
    if (props.id === 'undefined') {
        id = props.id;
    }

    return (
        <div className={style.body}>
            <Banner image={profile[id].banner} />
            <ProfileInfo name={profile[id].name} city={profile[id].city} avatar={profile[id].image} age={profile[id].age} />
            <ProfilePosts id={id}/>
        </div>
    )
}

export default Profile
