import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { Breadcrumbs } from '../layouts/Breadcrumbs/Breadcrumbs';
import { Navbar } from '../layouts/Navbar/Navbar';
import { Sidebar } from '../layouts/Sidebar/Sidebar';
import { EmpleadoScreen } from '../views/auth/EmpleadoScreen';
import { VentasScreen } from '../views/auth/VentasScreen';
import { LoginScreen } from '../views/auth/LoginScreen';
import { CrearmediScreen } from '../views/auth/CrearmediScreen';
import { EditarmediScreen } from '../views/auth/EditarmediScreen';
import { ListamedicinaScreen } from '../views/auth/ListamedicinaScreen';

export const MinimarketRouter = () => {
	return (
		<div>
			<Navbar />
			<Sidebar />
			<div className='content-wrapper'>
				<Breadcrumbs />
				<Switch>
					<Route exact path='/login' Component={LoginScreen} />
					<Route exact path='/empleados' component={EmpleadoScreen} />
					<Route exact path='/ventas' component={VentasScreen} />
					<Route exact path='/crearmedi' component={CrearmediScreen} />
					<Route exact path='/modificarmedi' component={EditarmediScreen} />
					<Route exact path='/listamedi' component={ListamedicinaScreen} />
				</Switch>
			</div>
		</div>
	);
};
