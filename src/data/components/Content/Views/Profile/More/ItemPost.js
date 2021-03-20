import React from 'react';

import style from './styles/ItemPost.module.css';

const ItemPost = (props) => {

    return (
        <div className={style.body}>
            <img src={props.avatar} alt='' />
            <text>{props.text}</text>
            <div><span>likes: {props.likes}</span></div>
        </div>
    )
}

export default ItemPost;