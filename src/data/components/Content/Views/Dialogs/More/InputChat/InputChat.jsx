import React from 'react';

import style from './InputChat.module.css';

const InputChat = (props) => {

    return (
        <div className={style.body} >
            <div><input placeholder='Напишите что-то' /></div>
            <img src={'https://cdn0.iconfinder.com/data/icons/instagram-ui-1/24/Instagram-UI_send-512.png'} alt='' />
        </div>
    )
}

export default InputChat;