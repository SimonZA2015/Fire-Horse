import React from 'react'
import Sittings from "./Views/Sittings/Sittings";
import Profile from "./Views/Profile/Profile";
import Dialogs from "./Views/Dialogs/Dialogs";
import Music from "./Views/Music/Music";
import {Route} from "react-router-dom";

import style from './Content.module.css';
import Friends from "./Views/Friends/Friends";
import Feed from "./Views/Feed/Feed";

const Content = ({props}) => {

    return (
        <div className={style.body}>
            <Route path='/profile' render={() => <Profile props={props} />} />
            <Route path='/dialogs' render={() => <Dialogs props={props} />} />
            <Route path='/sittings' render={() => <Sittings props={props} />} />
            <Route path='/audio' render={Music} />
            <Route path='/news' render={() => <Feed props={props} />} />
            <Route path='/friends' render={() => <Friends props={props} />} />
        </div>
    )
}

export default Content;