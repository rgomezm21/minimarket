import React from 'react';

export const Breadcrumbs = () => {
	return (
		<>
			{/* Content Header (Page header) */}
			<div className='content-header'>
				<div className='container-fluid'>
					<div className='row mb-2'>
						<div className='col-sm-6'>
							<h1 className='m-0 text-dark'>Minimarket</h1>
						</div>
						{/* /.col */}
						<div className='col-sm-6'>
							<ol className='breadcrumb float-sm-right'>
								<li className='breadcrumb-item'>
									<a href='/login'>Vender</a>
								</li>
								<li className='breadcrumb-item'>
									<a href='/login'>Cerrar sesion</a>
								</li>
							</ol>
						</div>
						{/* /.col */}
					</div>
					{/* /.row */}
				</div>
				{/* /.container-fluid */}
			</div>
		</>
	);
};
