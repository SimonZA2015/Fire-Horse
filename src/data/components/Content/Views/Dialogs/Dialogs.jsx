import React, {useState} from 'react';

import style from './Dialogs.module.css';
import ListDialogs from "./More/ListDialogs/ListDialogs";
import ListChat from "./More/ListChat/ListChat";

const Dialogs = (props) => {

    const [id, setId] = useState(0);

    return (
        <div className={style.body} >
            <ListDialogs setId={(ide) => setId(ide)} />
            <ListChat id={id} />
        </div>
    )
}

export default Dialogs;