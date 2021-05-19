import React from 'react';
import ItemFeed from "../ItemFeed/ItemFeed";

const ListFeed = (props) => {

    return (
        <div>
            {props.profileInfo.map((data) => {

                return(
                data.posts.map((dataPost) => (
                    <ItemFeed
                        idLogin={props.id}
                        text={dataPost.text}
                        user={dataPost.user}
                        avatar={props.profileInfo[dataPost.user].image}
                        likes={dataPost.likes}
                        onLike={() => props.likePost(data.posts.indexOf(dataPost), dataPost.user, props.id)}
                    />
                )))
            })}
        </div>
    )
}

export default ListFeed;