import React from 'react';

export const CambioContraseña = () => {
    return (
        <div>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light" style={{margin:"0px auto"}}>
                {/* Left navbar links */}
                <ul className="navbar-nav">
                <a href='/nuevoempleado'><button className="btn btn-primary mr-3" style={{width:"176px"}}>Nuevo Empleado</button></a>
                  <a href='/empleados'><button className="btn btn-primary mr-3" style={{width:"176px"}}>Datos personales</button></a>
                  <a href='/cambiarContraseña'><button className="btn btn-primary mr-3" style={{width:"176px"}}>Cambiar contraseña</button></a>
                </ul>
              </nav>
            {/* Modal */}
            <hr />
            <div className="container-fluid">
                <div className="row" style={{margin:"0px auto"}}>
                  {/* left column */}
                  <div className="col-md-6">
                    {/* general form elements */}
                    <div className="card card-primary">
                      <div className="card-header">
                        <h3 className="card-title">Cambio contraseña</h3>
                      </div>
                      {/* /.card-header */}
                      {/* form start */}
                      <form role="form">
                        <div className="card-body">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-unlock-alt" /></span>
                            </div>
                            <input id="oldpass" type="password" className="form-control" placeholder="Ingrese contraseña antigua" />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-lock" /></span>
                            </div>
                            <input id="newpass" type="text" className="form-control" placeholder="Ingrese contraseña nueva" />
                        </div>
                        </div>
                        {/* /.card-body */}
                        <div className="card-footer">
                          <button type="submit" className="btn btn-primary mr-3">Guardar</button>
                          <button className="btn btn-primary">Limpiar</button>
                        </div>
                      </form>
                    </div>
                    {/* /.card */}
                  </div>
                  {/*/.col (left) */}
                  {/* /.row */}
                </div>{/* /.container-fluid */}
              </div>
        </div>
    )
}
