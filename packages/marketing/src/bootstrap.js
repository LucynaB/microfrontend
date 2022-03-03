import React from 'react';
import ReactDOM from 'react-dom';
import {createMemoryHistory, createBrowserHistory} from 'history';
import App from './App';

//Function to start up the app
const startMarketing = (el, {onNavigate, defaultHistory}) => {
    const history = defaultHistory || createMemoryHistory();
    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(<App history={history}/>, el);

    return {
        onParentNavigate({pathname: nextPathname}) {
            const {pathname} = history.location;

            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    };
};

//If we are in development in isolation
//call start function immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');
    if (devRoot) {
        startMarketing(devRoot, {defaultHistory: createBrowserHistory()});
    }
}

//We are running through container
//and we should export start function
export {startMarketing};