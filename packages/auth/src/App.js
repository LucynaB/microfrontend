import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';
import Signin from './components/Signin';
import Signup from './components/Signup';


//to prevent css class name collision
const generateClassName = createGenerateClassName({
    productionPrefix: 'au'
});

export default ({history, onSignIn}) => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route exact path='/auth/signin'>
                            <Signin onSignIn={onSignIn} />
                        </Route>
                        <Route path='/auth/signup'>
                            <Signup onSignIn={onSignIn} />
                        </Route>
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    );
};
