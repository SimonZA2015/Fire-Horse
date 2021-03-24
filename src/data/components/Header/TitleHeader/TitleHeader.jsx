import React from 'react';
import {Route} from "react-router-dom";

const mesText = (props) => {

    return (
        <h4 style={{color: 'black'}}>Messages</h4>
    )
}
const profileText = (props) => {

    return (
        <h4 style={{color: 'black'}}>Profile</h4>
    )
}
const newsText = (props) => {

    return (
        <h4 style={{color: 'black'}}>Feed</h4>
    )
}
const musicText = (props) => {

    return (
        <h4 style={{color: 'black'}}>Audio</h4>
    )
}
const sitText = (props) => {

    return (
        <h4 style={{color: 'black'}}>Sittings</h4>
    )
}
const frendText = (props) => {

    return (
        <h4 style={{color: 'black'}}>Friends</h4>
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
            <Route path={'/friends'} component={frendText} />
        </div>
    )
}

export default TitleHeader;