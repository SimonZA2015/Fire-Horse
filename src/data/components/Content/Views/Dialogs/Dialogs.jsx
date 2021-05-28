import React, {useState} from 'react';

import style from './Dialogs.module.css';
import ListDialogs from "./More/ListDialogs/ListDialogs";
import ListChat from "./More/ListChat/ListChat";

const Dialogs = ({props}) => {

    const messagesList = props.dispatch({type: 'GET-MESSAGES'});
    const profileInfo = props.dispatch({type: 'GET-PROFILES'});

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
            <ListDialogs profileInfo={profileInfo} messagesList={props.dispatch({type: 'GET-MESSAGES'})} setId={() => setId(update)} />
            <ListChat send={(data) => props.dispatch({type: 'ADD-MESSAGEITEM', data: data})} profileInfo={profileInfo} messagesList={messagesList} id={id} idUsr={props.dispatch({type: 'GET-LOGIN'})} />
        </div>
    )
}

export default Dialogs;