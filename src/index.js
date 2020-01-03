import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Real world store / reducer
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// For thunk
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

//
import productsReducer from './reducers/products-reducer';
import userReducer from './reducers/user-reducer';


const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
});

const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(
    allReducers,
    {
        products: [{ name: 'iPhone' }],
        user: 'Michael'
    },
    allStoreEnhancers
);

ReactDOM.render(
    <Provider store={store}>
        <App appProps="passed in" />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
