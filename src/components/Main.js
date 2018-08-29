import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Listings from './Listings';
import Portfolio from './Portfolio';

import './css/main.css';

const Main = () => (
    <main>
        <div className='container'>
            <Switch>
                <Route exact path='/' component={Listings} />    
                <Route exact path='/portfolio' component={Portfolio} />    
                <Route exact path='/listings' component={Listings} />    
            </Switch>        
        </div>
    </main>
)

export default Main;