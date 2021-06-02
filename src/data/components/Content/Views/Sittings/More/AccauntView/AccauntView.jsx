import React from 'react';
import InfoBanner from "./InfoBanner/InfoBanner";
import LogoutButton from "../LogoutButton/LogoutButton";

// import style from './AccauntView.module.css';

const AccauntView = (props) => {

    return (
        <div>
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