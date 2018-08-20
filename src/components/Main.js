import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Listings from './Listings';
import Portfolio from './Portfolio';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Listings} />    
            <Route exact path='/portfolio' component={Portfolio} />    
            <Route exact path='/listings' component={Listings} />    
        </Switch>        
    </main>
)

export default Main;
