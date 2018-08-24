# React + Redux Study

## Reference
- Redux Tutorial - Learn React/Redux in one video
  - https://www.youtube.com/watch?v=OSSpVLpuVWA&t=4s


## Install
```
  create-react-app .
  npm i -S redux react-redux
```

## Redux flow
![Redux flow](_notes/redux-flow.png)


## Topic
- Store, reducer, action

- Redux devtools

- Access Redux store in React componet: Provider, connect()
```
    <Provider store={store}>
        <App />
    </Provider>,
```
In App.js
```
const mapStateToProps = (state) =>{
  return state;
}
const mapActionsToProps = { 
  onUpdateUser: updateUser
}
export default connect(mapStateToProps, mapActionsToProps)(App);
```

mapStateToProps: receives the state of the store then map the data into props