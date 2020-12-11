import {createStore, combineReducers} from "redux";
import {todos} from './pages/todos/reducers'

const reducers ={
  todos
}

const rootReducer = combineReducers(reducers);

export const configureStore = () =>{
  return createStore(rootReducer);
}  
