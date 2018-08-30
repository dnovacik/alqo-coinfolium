import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import { Store } from './Store';

import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userId: ''
    }
  }

  handleUserLogin = (userId) => {
    this.setState({userId: userId});
  }

  render() {
    return (
      <Provider store={Store}>
        <div>
          <Header userId={this.state.userId} handleUserLogin={this.handleUserLogin} />
          <Main userId={this.state.userId} handleUserLogin={this.handleUserLogin}/>
        </div>
      </Provider>
    );
  }
}

export default App;
