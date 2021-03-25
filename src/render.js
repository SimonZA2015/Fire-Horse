import React from 'react';
import {addMessagesItem, addPost, editPostText} from "./data/base/info";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";

import './index.css';

const Render = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <App editPostText={editPostText} addMessages={addMessagesItem} addPost={addPost} id={0} profileInfo={state.profile} messagesList={state.dialog[0]} idUser={0}/>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

export default Render;