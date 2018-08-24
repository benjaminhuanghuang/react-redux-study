import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
//
import { updateUser } from './actions/userActions';


class App extends Component {
  onClick(){
    this.props.onUpdateUser("AAAAA");
  }

  onChange(e)
  {
    this.props.onUpdateUser(e.target.value);
  }
  
  render() {
    console.log("props in App: ",this.props);   
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div onClick={()=>this.onClick()}>Update User</div>
        <input onChange={(e)=>this.onChange(e)}></input>
        {this.props.user}
      </div>
    );
  }
}

//mapStateToProps: receives the state of the store then map the data into props
const mapStateToProps = (state) => ({
  products: state.products,
  user: state.user
});

const mapActionsToProps = {
  onUpdateUser: updateUser
}
export default connect(mapStateToProps, mapActionsToProps)(App);
