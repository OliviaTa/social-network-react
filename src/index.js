import './index.css';
import state, { updateState } from './redux/state';
import { rerenderEntireTree } from './render';
import reportWebVitals from './reportWebVitals';

rerenderEntireTree(state, updateState);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
