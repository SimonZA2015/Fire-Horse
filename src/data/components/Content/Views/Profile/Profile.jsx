import React from 'react';

import Banner from "./More/ProfileBanner";
import ProfileInfo from "./More/ProfileInfo";
import ProfilePosts from "./More/ProfilePosts";

import style from "./Profile.module.css";

const Profile = ({props}) => {

    let id = parseInt((window.location.pathname).split('/')[2]);
    if (isNaN(id)) {
        id = props.dispatch({type: 'GET-LOGIN'});
    }

    const profileData = props.dispatch({type: 'GET-PROFILE', id: id})

    return (
        <div className={style.body}>
            <Banner image={profileData.banner} />
            <ProfileInfo
                name={profileData.name}
                city={profileData.city}
                avatar={profileData.image}
                age={profileData.age}
                id={id}
                iam={props.dispatch({type: 'GET-LOGIN'})}
            />
            <ProfilePosts
                iam={props.dispatch({type: 'GET-LOGIN'})}
                addPost={(data) => props.dispatch({type: 'ADD-POST', data: data})}
                id={id}
                profileInfo={props.dispatch({type: 'GET-PROFILES'})}
            />
        </div>
    )
}

export default Profile
