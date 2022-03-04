import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';
import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';
import Header from './components/Header';

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
                    <Switch>
                        <Route path='/auth' component={AuthApp}/>
                        <Route path='/' component={MarketingApp}/>
                    </Switch>
                </StylesProvider>
            </div>
        </BrowserRouter>
    );
};