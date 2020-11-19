import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { MinimarketRouter } from './MinimarketRouter';

export const AppRouter = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route path='/auth' component={AuthRouter} />
					<Route path='/' component={MinimarketRouter} />
				</Switch>
			</div>
		</Router>
	);
};
