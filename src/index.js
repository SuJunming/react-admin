import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import reducer from './redux/reducer';
import App from './App'
// redux 注入操作
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));
ReactDOM.render(
            <Provider store={store}>
                <App/>
            </Provider>,
  document.getElementById('root')
);
registerServiceWorker();