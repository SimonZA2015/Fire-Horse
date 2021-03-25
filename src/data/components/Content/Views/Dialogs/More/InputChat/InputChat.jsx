import React from 'react';

import style from './InputChat.module.css';

const InputChat = (props) => {
    let textInputChat = React.createRef();

    const sendMessage = () => {
        let messagesData = {
            ot: props.iam,
            text: textInputChat.current.value,
            komu: props.id
        };
        props.send(messagesData);
        textInputChat.current.value = '';

    }

    return (
        <div className={style.body} >
            <div><input ref={textInputChat} className={style.input} placeholder='Напишите что-то' /></div>
            <img onClick={sendMessage} src={'https://cdn0.iconfinder.com/data/icons/instagram-ui-1/24/Instagram-UI_send-512.png'} alt='' />
        </div>
    )
}

export default InputChat;