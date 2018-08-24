import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// Real world store / reducer
import { createStore, combineReducers } from 'redux';
/*
    Access store in app
*/
import { Provider } from 'react-redux';

// Reducer takes the previous state and an update and applies the update  
function productsReducer(state = [], action) {
    return state;
}


const UPDATE_USER = 'user:updateUser';

function userReducer(state = '', action) {
    switch (action.type) {
        case UPDATE_USER:
            return action.payload.user;
    }
    return state;
}

const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
});

/*
    Support redux devtools
*/
const store = createStore(
    allReducers,
    {
        products: [{ name: 'iPhone' }],
        user: 'Michael'
    },
    window.devToolsExtension && window.devToolsExtension()
);

console.log(store.getState());

//
const updateUserAction = {
    type: UPDATE_USER,
    payload: {
        user: 'Jone'
    }
}
store.dispatch(updateUserAction);
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
