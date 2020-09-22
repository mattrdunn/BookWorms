import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store.js';
// import App from './App.jsx';
import Login from './Login.jsx'

render(
    <Provider store={configureStore()}>
        <Login />
    </Provider>,
    document.getElementById('root')
);