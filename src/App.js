import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();

    this.state = {
      userName: '',
      userPassword: '',
      isLoggedIn: false
    }

    this.updateUserName = this.updateUserName.bind(this);
    this.updateUserPassword = this.updateUserPassword.bind(this);
  }

  clickHandler(){
    let config = {
      userName: this.state.userName,
      userPassword: this.state.userPassword
    }

    axios.post('http://localhost:3030/login', config).then( (response) => {
      if(response.data === true){
        this.setState({
          isLoggedIn: 'Logged In!'
        })
      }
      else{
        this.setState({
          isLoggedIn: 'Wrong login information.'
        })
      }
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
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <input onChange={( typing ) => this.updateUserName( typing.target.value ) }/><br />
        <input onChange={( typing ) => this.updateUserPassword( typing.target.value ) }/><br />
        <button onClick={() => this.clickHandler()}>Login</button>
        <p>{this.state.isLoggedIn}</p>
      </div>
    );
  }
}

export default App;
