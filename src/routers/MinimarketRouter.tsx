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
import { VentasDiariasScreen } from '../views/auth/VentasDiariasScreen';
import { VentasSemanalesScreen } from '../views/auth/VentasSemanalesScreen';
import { VentasMensualesScreen } from '../views/auth/VentasMensualesScreen';
import { VentasAnualesScreen } from '../views/auth/VentasAnualesScreen';
import { CambiarContraseScreen } from '../views/auth/CambiarContraseScreen';
import { NuevoEmpleadoScreen } from '../views/auth/NuevoEmpleadoScreen';


export const MinimarketRouter = () => {
	return (
		<div>
			<Navbar />
			<Sidebar />
			<div className='content-wrapper'>
				<Breadcrumbs />
				<Switch>
					<Route exact path='/login' Component={LoginScreen} />
					<Route exact path='/nuevoempleado' component={NuevoEmpleadoScreen} />
					<Route exact path='/empleados' component={EmpleadoScreen} />
					<Route exact path='/cambiarContraseña' component={CambiarContraseScreen} />
					<Route exact path='/ventas' component={VentasScreen} />
					<Route exact path='/crearmedi' component={CrearmediScreen} />
					<Route exact path='/modificarmedi' component={EditarmediScreen} />
					<Route exact path='/listamedi' component={ListamedicinaScreen} />
					<Route exact path='/ventasDiarias' component={VentasDiariasScreen} />
					<Route exact path='/ventasSemanales' component={VentasSemanalesScreen} />
					<Route exact path='/ventasMensuales' component={VentasMensualesScreen} />
					<Route exact path='/ventasAnuales' component={VentasAnualesScreen} />
				</Switch>
			</div>
		</div>
	);
};
