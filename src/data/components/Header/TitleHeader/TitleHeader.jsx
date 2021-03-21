import React from 'react';
import {Route} from "react-router-dom";

const mesText = (props) => {

    return (
        <h4 style={{color: 'black'}}>Сообщения</h4>
    )
}
const profileText = (props) => {

    return (
        <h4 style={{color: 'black'}}>Профиль</h4>
    )
}
const newsText = (props) => {

    return (
        <h4 style={{color: 'black'}}>Новости</h4>
    )
}
const musicText = (props) => {

    return (
        <h4 style={{color: 'black'}}>Музыка</h4>
    )
}
const sitText = (props) => {

    return (
        <h4 style={{color: 'black'}}>Настройки</h4>
    )
}

const TitleHeader = (props) => {

    return (
        <div>
            <Route path={'/dialogs'} component={mesText} />
            <Route path={'/profile'} component={profileText} />
            <Route path={'/news'} component={newsText} />
            <Route path={'/audio'} component={musicText} />
            <Route path={'/sittings'} component={sitText} />
        </div>
    )
}

export default TitleHeader;