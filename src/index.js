import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import state, { subscribe, updateState } from './redux/state';
import reportWebVitals from './reportWebVitals';


const rerenderEntireTree = (state, updateState) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} updateState={updateState} />
        </BrowserRouter>,
        document.getElementById('root')
    );
};

rerenderEntireTree(state, updateState);

subscribe(rerenderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
