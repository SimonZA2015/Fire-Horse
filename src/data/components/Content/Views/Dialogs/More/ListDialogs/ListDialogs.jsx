import React from 'react';
// import {messages, profile} from "../../../../../../base/info";
import FABAddDialogs from "../FABAddDialogs/FABAddDialogs";
import ItemDialog from "../ItemDialog/ItemDialog";

import style from "./ListDialogs.module.css";


const ListDialogs = (props) => {

    let mesList = props.messagesList;
    let profileInfo = props.profileInfo;
    let i = 0;

    return (
        <div className={style.body} >
            {mesList.map((data) => {
                let temp = <ItemDialog onClick={(ide) => props.setId(ide)} id={i} name={data.name} image={profileInfo[data.id].image} />
                i++

                if (i === mesList.length) {
                    i = 0;
                }
                return (temp)
            })}
            <FABAddDialogs />
        </div>
    )
}

export default ListDialogs;