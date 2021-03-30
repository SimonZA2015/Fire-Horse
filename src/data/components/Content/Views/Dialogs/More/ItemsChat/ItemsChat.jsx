import React from 'react';

import style from './ItemsChat.module.css';

const ItemsChat = (props) => {
    let styleId = style.body;
    if (props.ot.toString() === props.admin.toString()) {
        styleId = style.bodyRight;
    }

    return (
        <div className={styleId}>
            <img src={props.image} alt={''} />
            <text>{props.text}</text>
            <img src={props.image} alt={''} />
        </div>
    )
}

export default ItemsChat;