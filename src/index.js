import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app/app';

import { allReducers } from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);

const store = createStore(allReducers, compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
    <Provider {...{store}}>
        <App number={22}/>
    </Provider>
    , document.getElementById('root'));
