import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter
} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import reducer from './reducer';
import App from './App'

// redux 注入操作
const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));
ReactDOM.render(          
        <Provider store={store}>
            <App store={store}/>
        </Provider>,
  document.getElementById('root')
);
registerServiceWorker();