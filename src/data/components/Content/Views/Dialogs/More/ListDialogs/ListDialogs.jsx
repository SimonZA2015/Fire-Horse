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
            {mesList ? mesList.map((data) => {
                i++;

                return (
                    <ItemDialog
                        onClick={props.setId}
                        id={i - 1}
                        name={data.name}
                        image={profileInfo[data.id].image}
                    />
                )
            }) : '' }
            <FABAddDialogs />
        </div>
    )
}

export default ListDialogs;