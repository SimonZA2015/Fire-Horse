import React from 'react';

import Banner from "./More/ProfileBanner";
import ProfileInfo from "./More/ProfileInfo";
import ProfilePosts from "./More/ProfilePosts";

import style from "./Profile.module.css";

const Profile = ({props}) => {

    let id = parseInt((window.location.pathname).split('/')[2]);
    if (isNaN(id)) {
        id = props.idUser
    }

    return (
        <div className={style.body}>
            <Banner image={props.profileInfo[id].banner} />
            <ProfileInfo iam={props.idUser} id={id} name={props.profileInfo[id].name} city={props.profileInfo[id].city} avatar={props.profileInfo[id].image} age={props.profileInfo[id].age} />
            <ProfilePosts editPostText={props.editPostText} iam={props.idUser} addPost={props.addPost} id={id} profileInfo={props.profileInfo}/>
        </div>
    )
}

export default Profile
