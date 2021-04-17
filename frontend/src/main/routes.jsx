import React from 'react';
import {Router, Route, Redirect, hashHistory, IndexRoute} from 'react-router';

import Dashboard from '../dashboard/dashboard';
import BillingCycle from '../billingCycle/billingCycle';
import AuthOrApp from './authOrApp'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dashboard}/>
            <Route path='/billingCycle' component={BillingCycle}/>
        </Route>
        <Redirect from='*' to='/'/>
    </Router>
)