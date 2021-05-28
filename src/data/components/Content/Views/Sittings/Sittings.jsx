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
                    setName={(data) => props.dispatch({type: 'EDIT-PROFILE-NAME', data: data})}
                    setAge={(data) => {alert(data); props.dispatch({type: 'EDIT-PROFILE-AGE', data: data})}}
                    setCity={(data) => props.dispatch({type: 'EDIT-PROFILE-CITY', data: data})}
                    info={props.dispatch({type: 'GET-MYPROFILE'})}
                    logOut={() => props.dispatch({type: 'LOGOUT'})}
                />
            </Route>
            <Route path={'/sittings/privacy'} ></Route>
        </div>
    )
}

export default Sittings;