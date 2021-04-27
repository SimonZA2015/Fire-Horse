import React from 'react';

import style from './AccauntView.module.css';
import InfoBanner from "./InfoBanner/InfoBanner";

const AccauntView = (props) => {

    return (
        <div className={style.body}>
            <InfoBanner id={props.id} setAge={props.setAge} avatar={props.info.image} age={props.info.age} city={props.info.city} name={props.info.name} />
        </div>
    )
}

export default AccauntView;