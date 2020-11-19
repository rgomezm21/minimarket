import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Breadcrumbs } from '../layouts/Breadcrumbs/Breadcrumbs';
import { Navbar } from '../layouts/Navbar/Navbar';
import { Sidebar } from '../layouts/Sidebar/Sidebar';
import { EmpleadoScreen } from '../views/auth/EmpleadoScreen';

export const MinimarketRouter = () => {
	return (
		<div>
			<Navbar />
			<Sidebar />
			<div className='content-wrapper'>
				<Breadcrumbs />
				<Switch>
					<Route exact path='/re' component={EmpleadoScreen} />
				</Switch>
			</div>
		</div>
	);
};
