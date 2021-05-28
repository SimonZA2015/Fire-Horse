import React from "react";
import ItemMenu from "../ItemMenu/ItemMenu";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

import style from './ListItemsMenu.module.css';

const ListItemsMenu = (props) => {

    return (
        <div className={style.body}>
            <ProfileMenu name={props.profiles.name} image={props.profiles.image}  />
            <ItemMenu close={props.close} name={'Feed'} path={'/news/'} />
            <ItemMenu close={props.close} name={'Music'} path={'/audio/'} />
            <ItemMenu close={props.close} name={'Sittings'} path={'/sittings/'} />
        </div>
    )
};

export default ListItemsMenu;