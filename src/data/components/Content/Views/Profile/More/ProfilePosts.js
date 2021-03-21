import React from 'react';
import AddPost_Block from "./AddPost_Block";
import ItemPost from "./ItemPost";
import {profile} from "../../../../../base/info";

const ProfilePosts = (props) => {

    return (
        <div>
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <AddPost_Block id={props.id} />
            {profile[props.id].posts.map((data) => (<ItemPost likes={data.likes.length} text={data.text} avatar={profile[data.user].image} />))}
        </div>
    )
}

export default ProfilePosts;