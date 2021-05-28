import React from "react";
import LogInPopout from "./LogInPopout/LogInPopout";
import MenuPopouts from "./MenuPopouts/MenuPopouts";

const Popouts = (props) => {

    const idLogin = props.dispatch({type: 'GET-LOGIN'});
    const myProfile = props.dispatch({type: 'GET-MYPROFILE', idLogin: idLogin})

    return (
        <div>
            <LogInPopout idLogin={idLogin} logIn={(login, pass) => props.dispatch({type: 'SETLOGIN-LOGIN', login: login, pass: pass})} />
            <MenuPopouts profiles={myProfile} menuPop={props.menuPop} setMenuPop={props.setMenuPop} idLogin={idLogin} />
        </div>
    )
};

export default Popouts;