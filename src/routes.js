//dependencies
import React from 'react'
import {BrowserRouter as Router,Route,Switch, Link, Redirect } from 'react-router-dom'
import { browserHistory } from 'react-router'

// components
import App from './components/App';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Page404 from './components/Page404';


const AppRoutes = () => 

		<Router>
			<Route path="/about" component={About} />
			<Route path="/contact" component={Contact} />
			<Route path="/" component={Home} />
			<Route component={Page404} />
		</Router>
	;

export default AppRoutes;