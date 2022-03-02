import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Function to start up the app
const startMarketing = (el) => {
    ReactDOM.render(<App />, el);
};

//If we are in development in isolation
//call start function immediately
if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_marketing-dev-root');
    if(devRoot){
        startMarketing(devRoot);
    }
}

//We are running through container
//and we should export start function
export {startMarketing};