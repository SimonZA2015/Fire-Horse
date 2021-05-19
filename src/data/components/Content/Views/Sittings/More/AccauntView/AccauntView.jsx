import React from 'react';

import style from './AccauntView.module.css';
import InfoBanner from "./InfoBanner/InfoBanner";
import LogoutButton from "../LogoutButton/LogoutButton";

const AccauntView = (props) => {

    return (
        <div className={style.body}>
            <InfoBanner
                id={props.id}
                setName={props.setName}
                setAge={props.setAge}
                setCity={props.setCity}
                avatar={props.info.image}
                age={props.info.age}
                city={props.info.city}
                name={props.info.name}
            />
            <LogoutButton logOut={props.logOut} />
        </div>
    )
}

export default AccauntView;