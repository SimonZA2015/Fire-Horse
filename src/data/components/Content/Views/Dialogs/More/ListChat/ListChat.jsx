import React from 'react';
// import {messages, profile} from "../../../../../../base/info";
import ItemsChat from "../ItemsChat/ItemsChat";
import InputChat from "../InputChat/InputChat";

import style from './ListChat.module.css';

// let mesList = messages[0];

const ListChat = (props) => {

    let mesList = props.messagesList;
    let profile = props.profileInfo;

    return (
        <div className={style.body} >
            <div className={style.list}>
                {mesList[props.id].messages.map((data) => (<ItemsChat image={profile[data.ot].image} text={data.text} />))}
            </div>
            <InputChat id={props.id} getText={(data) => mesList[props.id].messages.push(data)}/>
        </div>
    )
}

export default ListChat;