import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// Create store
import {createStore} from 'redux';

// Reducer takes the previous state and an update and applies the update  
function reducer()
{
    return 'state'
}
const store = createStore(reducer);   // createStore needs reducer

console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
