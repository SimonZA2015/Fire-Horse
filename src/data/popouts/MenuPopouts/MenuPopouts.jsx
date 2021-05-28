import React from "react";

import style from './MenuPopouts.module.css';
import ListItemsMenu from "./More/ListItemsMenu/ListItemsMenu";

const MenuPopouts = (props) => {

    return(<div>
        {props.menuPop ?
            <div className={style.bg}>
                <div onClick={() => props.setMenuPop(false)} className={style.close} />
                <div className={style.body}>
                    <ListItemsMenu close={() => props.setMenuPop(false)} profiles={props.profiles} idLogin={props.idLogin} />
                </div>
            </div> : ''}
    </div>
    )
};

export default MenuPopouts;