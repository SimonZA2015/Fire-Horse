import React from 'react';
import store from "./data/store/store";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";

import './index.css';

const render = () => {

    let loginId = parseInt(store.getLoginLogIn());

    ReactDOM.render(
        <BrowserRouter>
            <App editPostText={store.editPostText.bind(store)}
                 addMessages={store.addMessagesItem.bind(store)}
                 addPost={store.addPost.bind(store)}
                 setName={store.setNameProfile.bind(store)}
                 setAge={store.setAgeProfile.bind(store)}
                 setCity={store.setCityProfile.bind(store)}
                 id={loginId}
                 likePost={store.likePost.bind(store)}
                 logIn={store.setLoginLogIn.bind(store)}
                 logOut={store.logoutLogin.bind(store)}
                 profileInfo={store.getProfiles()}
                 messagesList={store.getMessages(loginId)}
                 idUser={loginId}
            />
        </BrowserRouter>,
        document.getElementById('root')
    )
}

store.subscribe(render)


