import React, {useState} from 'react';

import style from './Dialogs.module.css';
import ListDialogs from "./More/ListDialogs/ListDialogs";
import ListChat from "./More/ListChat/ListChat";

const Dialogs = ({props}) => {
    function update() {
        let url = parseInt((window.location.pathname).split('/')[2]);
        if (isNaN(url)) {
            url = 0;
        }
        return url
    }

    const [id, setId] = useState(update);

    return (
        <div className={style.body} >
            <ListDialogs profileInfo={props.profileInfo} messagesList={props.messagesList} setId={() => setId(update)} />
            <ListChat send={props.addMessages} profileInfo={props.profileInfo} messagesList={props.messagesList} id={id} idUsr={props.idUser} />
        </div>
    )
}

export default Dialogs;