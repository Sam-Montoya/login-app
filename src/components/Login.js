import React, { Component } from 'react';
import logo from '../logo.svg';
import App from '../App.js';

class Login extends Component {
    constructor(){
        super();
        
        this.state = {
            logOut: false
        }
    }

    onClick(){
        this.setState({
            logOut: true
        })
    }

    render() {
        if(this.state.logOut === false){
            return (
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2>Welcome, {this.props.userName}.</h2>
                    </div>
                    <div>
                        <button onClick={( click ) => this.onClick()}>Log Out</button>
                    </div>
                </div>
            );
        }else{
            return (
                <App />
            )
        }
    };
}

export default Login;