import React from 'react';
import store from "./data/base/info";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";

import './index.css';

const render = () => {

    let login=0

    ReactDOM.render(
        <BrowserRouter>
            <App editPostText={store.editPostText.bind(store)} addMessages={store.addMessagesItem.bind(store)} addPost={store.addPost.bind(store)} id={login} profileInfo={store.getProfiles()} messagesList={store.getMessages(login)} idUser={login}/>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

store.subscribe(render)


