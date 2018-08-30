import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Listings from './Listings';
import Portfolio from './Portfolio';
import Login from './Login';

import './css/main.css';

class Main extends Component {
    render() {
        return (
            <main>
                <div className='container'>
                    <Switch>
                        <Route exact path='/' component={Listings} />    
                        <Route exact path='/portfolio' component={Portfolio} />    
                        <Route exact path='/listings' component={Listings} />  
                        <Route exact path='/login' render={(props) => <Login {...props} handleUserLogin={this.props.handleUserLogin} />} />  
                    </Switch>        
                </div>
            </main>
        );
    }
}

export default Main;