import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Edit from './pages/Edit';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/edit" component={Edit} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;