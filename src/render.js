import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

export const rerenderEntireTree = (state, updateState) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} updateState={updateState} />
        </BrowserRouter>,
        document.getElementById('root')
    );
};