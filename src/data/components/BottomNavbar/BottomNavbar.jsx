import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

import style from './BottomNavbar.module.css';

const BottomNavbar = ({props , menu, setMenu}) => {

    const [messageCreate, setMessageCreate] = useState(false)

    // const update = () => {
    //     let url = (window.location.pathname).split('/')[1];
    //     if (url === 'dialogs') {
    //         setMessageCreate(true);
    //     }
    // }

    return (
        <div className={style.body} >
            <NavLink to={'/friends/'} ><img src={'https://static.thenounproject.com/png/3411532-200.png'} alt={'friends'} /></NavLink>
            {messageCreate ?
                <img
                    src={'http://pixelartmaker.com/art/0d68e937e67e023.png'}
                    alt={'add message'}
                /> : <NavLink
                    to={'/dialogs/'}
                >
                <img
                    onClick={() => {setMessageCreate(true)}}
                    src={'https://cdn0.iconfinder.com/data/icons/smashicons-dialogue-outline-vol-2-1/60/74_-_Chat_communication_dialogue_discussion-512.png'}
                    alt={'messages'}
                />
            </NavLink>}
                <img
                    onClick={() => setMenu(true)}
                    src={'https://icons-for-free.com/iconfiles/png/512/home+list+menu+menusettings+navigation+settings+icon-1320185736012370078.png'}
                    alt={'sittings'}
                />
        </div>
    )
};

export default BottomNavbar;