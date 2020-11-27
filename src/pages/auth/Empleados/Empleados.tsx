import React from 'react';

export const Empleados = () => {
    return (
          <>
              <nav className="main-header navbar navbar-expand navbar-white navbar-light" style={{width:"260px", padding:"0px"}}>
                {/* Left navbar links */}
                <ul className="navbar-nav">
                <a href='/nuevoempleado'><button className="btn btn-primary mr-3" style={{width:"176px"}}>Nuevo Empleado</button></a>
                  <a href='/empleados'><button className="btn btn-primary mr-3" style={{width:"176px"}}>Datos personales</button></a>
                  <a href='/cambiarContraseña'><button className="btn btn-primary mr-3" style={{width:"176px"}}>Cambiar contraseña</button></a>
                </ul>
              </nav>
              <section className="content">
                <div className="container-fluid">
                  <div className="row">
                    {/* left column */}
                    <div className="col-md-8">
                      {/* general form elements */}
                      <div className="card card-primary">
                        <div className="card-header" style={{marginTop:"3px"}}>
                            <h3 className="card-title mr-5">Buscar Empleado</h3>
                            <form className='form-inline ml-3'>
                                <div className='input-group input-group-sm'>
                                    <input
                                        className='form-control form-control-navbar'
                                        type='search'
                                        placeholder='Search'
                                        aria-label='Search'
                                    />
                                    <div className='input-group-append'>
                                        <button className='btn btn-navbar' type='submit'>
                                            <i className='fas fa-search' />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* /.card-header */}
                        {/* form start */}
                        <form role="form">
                          <div className="card-body">
                            <div className="form-group">
                              <label htmlFor="exampleInputEmail1">Telefono</label>
                              <input type="number" className="form-control" id="exampleInputEmail1" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleInputPassword1">Dirección</label>
                              <input type="text" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleInputPassword1">Correo</label>
                              <input type="email" className="form-control" id="exampleInputPassword1"  />
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleInputPassword1">Sexo</label>
                              <input type="text" className="form-control" id="exampleInputPassword1"  />
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleInputPassword1">Informacion Adicional</label>
                              <textarea className="form-control" id="exampleInputPassword1"  />
                            </div>
                          </div>
                          {/* /.card-body */}
                          <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Guardar</button>
                          </div>
                        </form>
                      </div>
                      {/* /.card */}
                    </div>
                    {/*/.col (left) */}
                    {/* right column */}
                    <div className="col-md-4">
                        {/* general form elements disabled */}
                        <div className="card card-success card-outline">
                          <div className="card-body box-profile">
                            <div className="text-center">
                              <img src="../img/avatar.png" alt="avatar" className="profile-user-img img-fluid img-circle" />
                            </div>
                            <input id="id_usuario" type="hidden" defaultValue="Fredys" />
                            <h3 id="nombre_us" className="profile-username text-center text-success">Nombre</h3>
                            <p id="apellido_us" className="text-muted text-center">Apellidos</p>
                            <ul className="list-group list-group-unbordered mb-3">
                              <li className="list-group-item">
                                <b style={{color: '#0B7300'}}>Edad</b> <a id="edad" className="float-right">12</a>
                              </li>
                              <li className="list-group-item">
                                <b style={{color: '#0B7300'}}>Usuario</b> <a id="dni_us" className="float-right">12</a>
                              </li>
                              <li className="list-group-item">
                                <b style={{color: '#0B7300'}}>Tipo Usuario</b><span id="us_tipo" className="float-right badge badge-primary">Empleado</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card card-success">
                          <div className="card-header">
                            <h3 className="card-title">Información</h3>
                          </div>
                          <div className="card-body">
                            <strong style={{color: '#0B7300'}}>
                              <i className="fas fa-phone mr-1" />Telefono
                            </strong>
                            <p id="telefono_us" className="text-muted">454165132</p>
                            <strong style={{color: '#0B7300'}}>
                              <i className="fas fa-map-marker-alt mr-1" />Dirección
                            </strong>
                            <p id="residencia_us" className="text-muted">454165132</p>
                            <strong style={{color: '#0B7300'}}>
                              <i className="fas fa-at mr-1" />Correo
                            </strong>
                            <p id="correo_us" className="text-muted">454165132</p>
                            <strong style={{color: '#0B7300'}}>
                              <i className="fas fa-smile-wink mr-1" />Sexo
                            </strong>
                            <p id="sexo_us" className="text-muted">454165132</p>
                            <strong style={{color: '#0B7300'}}>
                              <i className="fas fa-pencil-alt mr-1" />Informacion adicional
                            </strong>
                            <p id="adicional_us" className="text-muted">454165132</p>
                            <button className="edit btn btn-block bg-gradient-danger">Editar</button>
                          </div>
                        </div>
                        {/*/.col (right) */}
                      </div>
                    {/* /.row */}
                  </div>{/* /.container-fluid */}
                </div>
              </section>
          </>
    );
}