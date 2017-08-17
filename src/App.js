import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import Login from './components/Login.js'

class App extends Component {
  constructor(){
    super();

    this.state = {
      userName: '',
      userPassword: '',
      isLoggedIn: false,
      errorMessage: ''
    }

    this.loginHandler = this.loginHandler.bind(this);
    this.updateUserName = this.updateUserName.bind(this);
    this.updateUserPassword = this.updateUserPassword.bind(this);
  }

  loginHandler(){
    let config = {
      userName: this.state.userName,
      userPassword: this.state.userPassword
    }

    axios.post('http://localhost:3030/login', config).then( (response) => {
      if(response.data === true){
        this.setState({
          isLoggedIn: true
        });
      }
      else{
        this.setState({
          isLoggedIn: false,
          errorMessage: response.data
        });
      }
    });
  }

  createUserHandler(){
    let config = {
      userName: this.state.userName,
      userPassword: this.state.userPassword
    }

    axios.post('http://localhost:3030/createUser', config).then( (response ) => {
      console.log(response.data);
    });
  }

  updateUserName( userName ){
    this.setState({
      userName: userName
    })
  }

  updateUserPassword( userPassword ){
    this.setState({
      userPassword: userPassword
    })
  }

  render() {
    if(this.state.isLoggedIn === false){
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Login Page</h2>
          </div>
          <input onChange={( typing ) => this.updateUserName( typing.target.value ) }/><br />
          <input onChange={( typing ) => this.updateUserPassword( typing.target.value ) }/><br />
          <button onClick={() => this.loginHandler()}>Login</button> <br />
          <button onClick={() => this.createUserHandler()}>Create New User</button>
          <p>{this.state.errorMessage}</p>
        </div>
      );
    }else{
      return (
          <Login userName={this.state.userName}/>
      )
    }
  }
}

export default App;
