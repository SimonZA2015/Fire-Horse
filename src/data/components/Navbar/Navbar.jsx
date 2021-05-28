import React from 'react';
import FriendsButton from "./More/FriendsButton/FriendsButton";
import Button from "./More/Button/Button";

import style from './Navbar.module.css';

const Navbar = ({props}) => {
    return (
        <nav className={style.body}>
            <Button text={'Profile'} url={'/profile'} />
            <Button text={'News'} url={'/news'} />
            <Button text={'Messages'} url={'/dialogs'} />
            <FriendsButton id={props.dispatch({type: 'GET-LOGIN'})} text={'Friends'} url={'/friends'} profile={props.dispatch({type: 'GET-PROFILES'})} />
            <Button text={'Music'} url={'/audio'} />
            <Button text={'Sittings'} url={'/sittings'} />
        </nav>
    )
}

export default Navbar;