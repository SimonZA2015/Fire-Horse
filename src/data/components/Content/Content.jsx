import React from 'react'
import Sittings from "./Views/Sittings/Sittings";
import Profile from "./Views/Profile/Profile";
import Dialogs from "./Views/Dialogs/Dialogs";
import Music from "./Views/Music/Music";
import {Route} from "react-router-dom";
import News from "./Views/News/News";

import style from './Content.module.css';

const Content = (props) => {

    return (
        <div className={style.body}>
            <Route path='/profile' render={() => <Profile profileInfo={props.profileInfo} />} />
            <Route path='/dialogs' render={() => <Dialogs messagesList={props.messagesList} profileInfo={props.profileInfo} />} />
            <Route path='/sittings' render={Sittings} />
            <Route path='/audio' render={Music} />
            <Route path='/news' render={News} />
        </div>
    )
}

export default Content;