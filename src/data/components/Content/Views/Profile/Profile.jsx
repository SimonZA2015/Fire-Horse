import React from 'react';
import Banner from "./More/ProfileBanner";
import ProfileInfo from "./More/ProfileInfo";
import ProfilePosts from "./More/ProfilePosts";

import style from "./Profile.module.css";


const GetLoginActionCreate = () => ({type: 'GET-LOGIN'});

const GetProfileActionCreate = (id) => ({type: 'GET-PROFILE', id: id});

const GetProfilesActionCreate = () => ({type: 'GET-PROFILES'});

const AddPostActionCreate = (data) => ({type: 'ADD-POST', data: data});


const Profile = ({props}) => {

    let id = parseInt((window.location.pathname).split('/')[2]);
    if (isNaN(id)) {
        id = props.dispatch(GetLoginActionCreate());
    }

    const profileData = props.dispatch(GetProfileActionCreate(id));
    const profilesData = props.dispatch(GetProfilesActionCreate());
    const iId = props.dispatch(GetLoginActionCreate());

    debugger
    return (
        <div className={style.body}>
            <Banner image={profileData.banner} />
            <ProfileInfo
                name={profileData.name}
                city={profileData.city}
                avatar={profileData.image}
                age={profileData.age}
                id={id}
                iam={iId}
            />
            <ProfilePosts
                iam={iId}
                addPost={(data) => props.dispatch(AddPostActionCreate(data))}
                id={id}
                profileInfo={profilesData}
            />
        </div>
    )
}

export default Profile
