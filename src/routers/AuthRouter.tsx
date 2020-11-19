import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoginScreen } from '../views/auth/LoginScreen';

export const AuthRouter = () => {
	return (
		<div>
			<Switch>
				<Route exact path='/auth/login' component={LoginScreen} />
			</Switch>
		</div>
	);
};
