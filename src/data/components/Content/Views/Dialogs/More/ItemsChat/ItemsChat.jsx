import React from 'react';

import style from './ItemsChat.module.css';

const ItemsChat = (props) => {

    return (
        <div className={style.body}>
            {props.text}
        </div>
    )
}

export default ItemsChat;