import React from 'react';
import ListFeed from "./More/ListFeed/ListFeed";

const Feed = ({props}) => {

    return(
        <div>
            <ListFeed likePost={props.likePost} id={props.id} profileInfo={props.profileInfo} />
        </div>
    )
}

export default Feed;