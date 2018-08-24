import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// Real world store / reducer
import { createStore, combineReducers } from 'redux';

// Reducer takes the previous state and an update and applies the update  
function productsReducer(state = [], action) {
    return state;
}

function userReducer(state = '', action) {

    return state;
}

const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
}); 


const store = createStore(allReducers, {
    products: [{name: 'iPhone'}],
    user: 'Michael'
});   // createStore needs reducer. init state is optional

console.log(store.getState());


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
