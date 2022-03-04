import React, {lazy, Suspense, useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';

import ProgressBar from './components/ProgressBar';
import Header from './components/Header';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

//to prevent css class name collision
const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <BrowserRouter>
            <div>
                <StylesProvider generateClassName={generateClassName}>
                    <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                    <Suspense fallback={<ProgressBar/>}>
                        <Switch>
                            <Route path='/auth'>
                                <AuthLazy onSignIn={() => setIsSignedIn(true)}/>
                            </Route>
                            <Route path='/' component={MarketingLazy}/>
                        </Switch>
                    </Suspense>
                </StylesProvider>
            </div>
        </BrowserRouter>
    );
};