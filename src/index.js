import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById("root");
    let store = configureStore();
    console.log(process.env.NODE_ENV);

    ReactDOM.render(<App store={store} />, root);
});