import React from 'react';
import store from "./data/store/store";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";

import './index.css';

const render = () => {

    ReactDOM.render(
        <BrowserRouter>
            <App
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    )
}

store.subscribe(render)


