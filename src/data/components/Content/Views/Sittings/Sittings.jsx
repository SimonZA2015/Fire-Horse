import React from 'react';
import HeaderSittings from "./More/HeaderSittings/HeaderSittings";
import AccauntView from "./More/AccauntView/AccauntView";
import {Route} from "react-router-dom";

const Sittings = ({props}) => {

    return (
        <div>
            <HeaderSittings />
            <Route path={'/sittings/account'} >
                <AccauntView
                    id={props.id}
                    setName={props.setName}
                    setAge={props.setAge}
                    setCity={props.setCity}
                    info={props.profileInfo[props.id]}
                    logOut={props.logOut}
                />
            </Route>
            <Route path={'/sittings/privacy'} ></Route>
        </div>
    )
}

export default Sittings;