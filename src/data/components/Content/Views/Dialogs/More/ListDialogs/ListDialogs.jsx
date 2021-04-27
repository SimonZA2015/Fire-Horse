import React from 'react';
// import {messages, profile} from "../../../../../../base/info";
import FABAddDialogs from "../FABAddDialogs/FABAddDialogs";
import ItemDialog from "../ItemDialog/ItemDialog";

import style from "./ListDialogs.module.css";


const ListDialogs = (props) => {

    let mesList = props.messagesList;
    let profileInfo = props.profileInfo;
    let i = 0;
    let listDialogs = false;
    if (mesList.length > 0) {
        listDialogs = mesList.map((data) => {
            let temp = <ItemDialog onClick={props.setId} id={i} name={data.name} image={profileInfo[data.id].image} />
            i++

            if (i === mesList.length) {
                i = 0;
            }
            return (temp)
        })
    }

    return (
        <div className={style.body} >
            {listDialogs}
            <FABAddDialogs />
        </div>
    )
}

export default ListDialogs;