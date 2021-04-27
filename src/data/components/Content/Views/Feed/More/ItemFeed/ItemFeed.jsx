import React from 'react';

import style from './ItemFeed.module.css';

const ItemFeed = (props) => {

    return (
        <div className={style.body}>
            <img src={props.avatar} alt={'avatar'} />
            <h4>{props.text}</h4>
        </div>
    )
}

export default ItemFeed;