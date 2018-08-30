import React, { Component } from 'react';
import Uuid from 'uuid/v1';

class Login extends Component {
    render() {
        return (
            <div>
                <h1>My login page!</h1>
                <button onClick={this.handleLoginClick}></button>
            </div>
        );
    }

    handleLoginClick = () => {
        this.props.handleUserLogin(Uuid());
    }
}

export default Login;