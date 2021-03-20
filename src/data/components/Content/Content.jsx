import React from 'react'
import Sittings from "./Views/Sittings/Sittings";
import Profile from "./Views/Profile/Profile";
import Dialogs from "./Views/Dialogs/Dialogs";
import Music from "./Views/Music/Music";
import {Route} from "react-router-dom";
import News from "./Views/News/News";

import style from './Content.module.css';

const Content = () => {

    return (
        <div className={style.body}>
            <Route path='/profile' component={Profile} />
            <Route path='/dialogs' component={Dialogs} />
            <Route path='/sittings' component={Sittings} />
            <Route path='/audio' component={Music} />
            <Route path='/news' component={News} />
        </div>
    )
}

export default Content;