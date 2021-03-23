import React from 'react';
import TitleHeader from "./TitleHeader/TitleHeader";
import {profile} from "../../base/info";
import logo from '../../media/logo.png'

import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {

    return (
        <header className={style.body} >
            <img className={style.logo} src={logo} alt='' />
            <NavLink className={style.NavLink} to={'/profile'} ><img className={style.avatar} src={profile[0].image} alt={''}  /></NavLink>
            <TitleHeader />
        </header>
    )
}

export default Header;