import React from 'react';

import style from './Header.module.css';
import {profile} from "../../base/info";
import TitleHeader from "./TitleHeader/TitleHeader";

const Header = () => {

    return (
        <header className={style.body} >
            <img className={style.logo} src='https://lh3.googleusercontent.com/Yi1jIbBrtlsnr8gOFSMW-Qs9RDNhlUVlE8uOlcrUFBON1kzuogzVe2IAEKMaiPRJfTRfI3z7tfr10SKXlITV=w1920-h924-rw' alt='' />
            <img className={style.avatar} src={profile[0].image} alt={''} />
            <TitleHeader />
        </header>
    )
}

export default Header;