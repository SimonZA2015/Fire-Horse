import React from 'react';
import TitleHeader from "./TitleHeader/TitleHeader";
import {NavLink} from "react-router-dom";
import logo from '../../media/logo.png'

import style from './Header.module.css';

const Header = ({props}) => {

    return (
        <header className={style.body} >
            <img className={style.logo} src={logo} alt='' />
            <NavLink className={style.NavLink} to={'/profile'} ><img className={style.avatar} src={props.profileInfo[props.idUser].image} alt={''}  /></NavLink>
            <TitleHeader />
        </header>
    )
}

export default Header;