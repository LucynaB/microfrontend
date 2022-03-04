import React, {lazy, Suspense} from 'react';
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
    return (
        <BrowserRouter>
            <div>
                <StylesProvider generateClassName={generateClassName}>
                    <Header/>
                    <Suspense fallback={<ProgressBar/>}>
                        <Switch>
                            <Route path='/auth' component={AuthLazy}/>
                            <Route path='/' component={MarketingLazy}/>
                        </Switch>
                    </Suspense>
                </StylesProvider>
            </div>
        </BrowserRouter>
    );
};