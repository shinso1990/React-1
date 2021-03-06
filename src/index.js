//dependencies
import React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router-dom';
//routes
import AppRoutes from './routes'

//assets
import './index.css';
import App from './components/App'; //se comenta al agregar el routing
import * as serviceWorker from './serviceWorker';



render( <App />, 	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
