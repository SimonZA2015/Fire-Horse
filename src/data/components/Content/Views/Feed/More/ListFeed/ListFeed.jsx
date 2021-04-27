import React from 'react';
import ItemFeed from "../ItemFeed/ItemFeed";

const ListFeed = (props) => {

    return (
        <div>
            {props.profileInfo.map((data) => {

                return(
                data.posts.map((dataPost) => (
                    <ItemFeed text={dataPost.text} avatar={props.profileInfo[dataPost.user].image} likes={dataPost.likes} />
                )))
            })}
        </div>
    )
}

export default ListFeed;