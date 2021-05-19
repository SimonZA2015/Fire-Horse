import React from 'react';
import TitleHeader from "./TitleHeader/TitleHeader";
import logo from '../../media/logo.png'

import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = ({props}) => {

    return (
        <header className={style.body} >
            <img className={style.logo} onClick={() => window.location.href = '/news'} src={logo} alt='' />
            <NavLink className={style.NavLink} to={'/profile'} ><img className={style.avatar} src={props.profileInfo[props.idUser].image} alt={''}  /></NavLink>
            <TitleHeader />
        </header>
    )
}

export default Header;