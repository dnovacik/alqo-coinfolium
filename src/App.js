import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import { Store } from './Store';

import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div>
          <Header />
          <Main />
        </div>
      </Provider>
    );
  }
}

export default App;
