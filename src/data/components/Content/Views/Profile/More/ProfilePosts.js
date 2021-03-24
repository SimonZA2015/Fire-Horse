import React from 'react';
import AddPost_Block from "./AddPost_Block";
import ItemPost from "./ItemPost";

const ProfilePosts = (props) => {

    return (
        <div>
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <AddPost_Block id={props.id} />
            {props.profileInfo[props.id].posts.map((data) => (<ItemPost likes={data.likes.length} text={data.text} avatar={props.profileInfo[data.user].image} />))}
        </div>
    )
}

export default ProfilePosts;