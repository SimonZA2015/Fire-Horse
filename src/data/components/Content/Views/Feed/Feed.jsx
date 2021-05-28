import React from 'react';
import ListFeed from "./More/ListFeed/ListFeed";

const Feed = ({props}) => {

    return(
        <div>
            <ListFeed
                likePost={(data) => props.dispatch({type: 'LIKE-POST', data: data})}
                id={props.dispatch({type: 'GET-LOGIN'})}
                profileInfo={props.dispatch({type: 'GET-PROFILES'})}
            />
        </div>
    )
}

export default Feed;