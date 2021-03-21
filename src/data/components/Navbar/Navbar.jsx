import React from 'react';
import Button from "./More/Button";

import style from './Navbar.module.css';

const Navbar = (props) => {

    return (
        <nav className={style.body}>
            <Button text={'Profile'} url={'/profile'} />
            <Button text={'News'} url={'/news'} />
            <Button text={'Messages'} url={'/dialogs'} />
            <Button text={'Music'} url={'/audio'} />
            <Button text={'Sittings'} url={'/sittings'} />
        </nav>
    )
}

export default Navbar;