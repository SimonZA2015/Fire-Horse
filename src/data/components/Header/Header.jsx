import React from 'react';
import TitleHeader from "./TitleHeader/TitleHeader";
import logo from '../../media/logo.png'
import {NavLink} from "react-router-dom";

import style from './Header.module.css';

const Header = ({props}) => {

    return (
        <header className={style.body} >
            <NavLink to={'/news/'} className={style.NavLink1} ><img className={style.logo} src={logo} alt='' /></NavLink>
            <NavLink className={style.NavLink} to={'/profile'} ><img className={style.avatar} src={props.dispatch({type: 'GET-MYPROFILE'}).image} alt={''}  /></NavLink>
            <TitleHeader />
        </header>
    )
}

export default Header;