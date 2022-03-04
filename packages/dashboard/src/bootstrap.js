import {createApp} from 'vue';
import Dashboard from './components/Dashboard.vue';

//Function to start up the app
const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el);
};

//If we are in development in isolation
//call start function immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_dashboard-dev-root');
    if (devRoot) {
        mount(devRoot);
    }
}

//We are running through container
//and we should export start function
export {mount};