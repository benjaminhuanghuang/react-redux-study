import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// Create store
import {createStore} from 'redux';

// Reducer takes the previous state and an update and applies the update  
function reducer(state, action)
{
    if(action.type === 'changeState'){
        return action.payload.newState
    }

    return 'state';
}
const store = createStore(reducer);   // createStore needs reducer

console.log(store.getState());

// Dispatch action
const action = {
    type:'changeState',
    payload:{
        newState: 'New state'
    }
}
//send action to reducer
store.dispatch(action);  

console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
