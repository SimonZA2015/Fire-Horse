import React, {useState} from 'react';
import ListDialogs from "./More/ListDialogs/ListDialogs";
import ListChat from "./More/ListChat/ListChat";

import style from './Dialogs.module.css';


const AddMessageItemActionCreate = (data) => ({
    type: 'ADD-MESSAGEITEM',
    data: data
});

const GetLoginActionCreate = () => ({type: 'GET-LOGIN'});

const GetMessagesActionCreate = () => ({type: 'GET-MESSAGES'})

const GetProfilesActionCreate = () => ({type: 'GET-PROFILES'})



const Dialogs = ({props}) => {

    const messagesList = props.dispatch(GetMessagesActionCreate());
    const profileInfo = props.dispatch(GetProfilesActionCreate());
    const loginId = props.dispatch(GetLoginActionCreate());

    function update() {
        let url = parseInt((window.location.pathname).split('/')[2]);
        if (isNaN(url)) {
            url = loginId;
        }
        return url
    }

    const [id, setId] = useState(update);

    return (
        <div className={style.body} >
            <ListDialogs profileInfo={profileInfo} messagesList={messagesList} setId={() => setId(update)} />
            <ListChat send={(data) => props.dispatch(AddMessageItemActionCreate(data))} profileInfo={profileInfo} messagesList={messagesList} id={id} idUsr={loginId} />
        </div>
    )
}

export default Dialogs;