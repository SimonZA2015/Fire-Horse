import React from 'react';
import ListFeed from "./More/ListFeed/ListFeed";



const GetLoginActionCreate = () => ({type: 'GET-LOGIN'});

const GetProfilesActioneCreate = () =>({type: 'GET-PROFILES'});


const LikePostActionCreate = (data) => ({type: 'LIKE-POST', data: data});



const Feed = ({props}) => {

    return(
        <div>
            <ListFeed
                likePost={(data) => props.dispatch(LikePostActionCreate(data))}
                id={props.dispatch(GetLoginActionCreate())}
                profileInfo={props.dispatch(GetProfilesActioneCreate())}
            />
        </div>
    )
}

export default Feed;