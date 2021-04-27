import React from 'react';
import ListFeed from "./More/ListFeed/ListFeed";

const Feed = ({props}) => {

    return(
        <div>
            <ListFeed profileInfo={props.profileInfo} />
        </div>
    )
}

export default Feed;