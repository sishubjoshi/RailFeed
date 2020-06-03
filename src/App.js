import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Review from './components/Review';
import Sidenav from './components/SideNav';
import Test from './components/Test';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />

				<Switch>
					<Route exact path="/" component={Test} />
					<Route path="/review" component={Review} />
				</Switch>
			</div>
		);
	}
}

export default App;
