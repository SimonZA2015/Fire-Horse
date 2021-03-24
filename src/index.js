import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';
import state from "./data/base/info";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
        <BrowserRouter>
            <App id={0} profileInfo={state.profile} messagesList={state.messages[0]}/>
        </BrowserRouter>,
    document.getElementById('root')
);
