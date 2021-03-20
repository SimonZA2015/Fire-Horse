import React from 'react';
import Button from "./More/Button";

const Navbar = () => {

    return (
        <nav className='App-nav'>
            <Button text={'Profile'} url={'/profile'} />
            <Button text={'News'} url={'/news'} />
            <Button text={'Messages'} url={'/dialogs'} />
            <Button text={'Music'} url={'/audio'} />
            <Button text={'Sittings'} url={'/sittings'} />
        </nav>
    )
}

export default Navbar;