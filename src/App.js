import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import { Store } from './Store';

import Header from './components/Header';
import ContentContainer from './components/ContentContainer';
import CryptoContainer from './components/CryptoContainer';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div className='pageWrapper'>
          <Header />
          <ContentContainer />
          <CryptoContainer currency='eur' />
        </div>
      </Provider>
    );
  }
}

export default App;
