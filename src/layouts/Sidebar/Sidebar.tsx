import React from 'react';

export const Sidebar = () => {
	return (
		<>
			{/* Main Sidebar Container */}
			<aside className='main-sidebar sidebar-dark-primary elevation-4'>
				{/* Brand Logo */}
				<a href='/' className='brand-link'>
					<img
						src='./img/doctor.png'
						alt='AdminLTE Logo'
						className='brand-image img-circle elevation-3'
						style={{ opacity: '.8' }}
					/>
					<span className='brand-text font-weight-light'>Minimarket</span>
				</a>
				{/* Sidebar */}
				<div className='sidebar'>
					{/* Sidebar user panel (optional) */}
					<div className='user-panel mt-3 pb-3 mb-3 d-flex'>
						<div className='image'>
							<img
								src='./img/avatar.png'
								className='img-circle elevation-2'
								alt='User Image'
							/>
						</div>
						<div className='info'>
							<a href='/' className='d-block'>
								Freddy Simanca
							</a>
						</div>
					</div>
					{/* Sidebar Menu */}
					<nav className='mt-2'>
						<ul
							className='nav nav-pills nav-sidebar flex-column'
							data-widget='treeview'
							role='menu'
							data-accordion='false'>
							<li className='nav-header'>MODULOS</li>
							<li className='nav-item'>
								<a href='pages/gallery.html' className='nav-link'>
									<i className='nav-icon fas fa-money-check-alt' />
									<p>Presupuesto</p>
								</a>
							</li>
							<li className='nav-item'>
								<a href='/empleados' className='nav-link'>
									<i className='nav-icon fas fa-user-cog' />
									<p>Empleados</p>
								</a>
							</li>
							<li className='nav-item has-treeview'>
								<a href='#' className='nav-link'>
									<i className='nav-icon fas fa-pills' />
									<p>
										 Medicamentos
										<i className='fas fa-angle-left right' />
									</p>
								</a>
								<ul className='nav nav-treeview'>
									<li className='nav-item'>
									<a href='listamedi' className='nav-link'>
											<i className='far fa-arrow-alt-circle-right nav-icon' />
											<p>Lista Medicamentos</p>
										</a>
										<a href='crearmedi' className='nav-link'>
											<i className='far fa-arrow-alt-circle-right nav-icon' />
											<p>Crear Medicamento</p>
										</a>
									</li>
									<li className='nav-item'>
										<a href='modificarmedi' className='nav-link'>
											<i className='far fa-arrow-alt-circle-right nav-icon' />
											<p>Modificar Medicamento</p>
										</a>
									</li>
									<li className='nav-item'>
										<a href='pages/mailbox/read-mail.html' className='nav-link'>
											<i className='far fa-arrow-alt-circle-right nav-icon' />
											<p>Eliminar Medicamento</p>
										</a>
									</li>
								</ul>
							</li>
							<li className='nav-item has-treeview'>
								<a href='#' className='nav-link'>
									<i className='nav-icon fas fa-balance-scale' />
									<p>
										 Ventas
										<i className='fas fa-angle-left right' />
									</p>
								</a>
								<ul className='nav nav-treeview'>
								<li className='nav-item'>
										<a href='/ventas' className='nav-link'>
											<i className='far fa-arrow-alt-circle-right nav-icon' />
											<p>Lista ventas</p>
										</a>
									</li>
									<li className='nav-item'>
										<a href='pages/mailbox/mailbox.html' className='nav-link'>
											<i className='far fa-arrow-alt-circle-right nav-icon' />
											<p>Ventas diarias</p>
										</a>
									</li>
									<li className='nav-item'>
										<a href='pages/mailbox/compose.html' className='nav-link'>
											<i className='far fa-arrow-alt-circle-right nav-icon' />
											<p>Ventas semanales</p>
										</a>
									</li>
									<li className='nav-item'>
										<a href='pages/mailbox/read-mail.html' className='nav-link'>
											<i className='far fa-arrow-alt-circle-right nav-icon' />
											<p>Ventas mensuales</p>
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</nav>
					{/* /.sidebar-menu */}
				</div>
				{/* /.sidebar */}
			</aside>
		</>
	);
};
