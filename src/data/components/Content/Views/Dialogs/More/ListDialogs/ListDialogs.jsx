import React from 'react';
import {messages} from "../../../../../../base/info";
import ItemDialog from "../ItemDialog/ItemDialog";

import style from "./ListDialogs.module.css";
import FABAddDialogs from "../FABAddDialogs/FABAddDialogs";

let mesList = messages;

const ListDialogs = (props) => {

    let i = 0;

    return (
        <div className={style.body} >
            {mesList.map((data) => {
                let temp = <ItemDialog onClick={(ide) => props.setId(ide)} id={i} name={data.name} image={data.avatar} />
                i++

                if (i === messages.length) {
                    i = 0;
                }
                return (temp)
            })}
            <FABAddDialogs />
        </div>
    )
}

export default ListDialogs;