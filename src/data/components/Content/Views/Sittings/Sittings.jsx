import React from 'react';
import HeaderSittings from "./More/HeaderSittings/HeaderSittings";
import AccauntView from "./More/AccauntView/AccauntView";
import {Route} from "react-router-dom";

const Sittings = ({props}) => {

    return (
        <div>
            <HeaderSittings />
            <Route path={'/sittings/account'} ><AccauntView id={props.id} setAge={props.setAge} info={props.profileInfo[props.id]} /></Route>
            <Route path={'sittings/privacy'} ></Route>
        </div>
    )
}

export default Sittings;