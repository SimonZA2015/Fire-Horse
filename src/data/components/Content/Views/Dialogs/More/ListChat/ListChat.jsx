import React from 'react';
// import {messages, profile} from "../../../../../../base/info";
import ItemsChat from "../ItemsChat/ItemsChat";
import InputChat from "../InputChat/InputChat";

import style from './ListChat.module.css';

// let mesList = messages[0];

const ListChat = (props) => {

    let mesList = props.messagesList;
    let profile = props.profileInfo;
    let listItemsChat = mesList[props.id].messages.map((data) => (<ItemsChat admin={props.idUsr} ot={data.ot} image={profile[data.ot].image} text={data.text} />))

    return (
        <div className={style.body} >
            <div className={style.list}>
                {listItemsChat}
            </div>
            <InputChat send={props.send} iam={props.idUsr} id={props.id} getText={(data) => mesList[props.id].messages.push(data)}/>
        </div>
    )
}

export default ListChat;