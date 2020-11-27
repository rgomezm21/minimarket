import React from 'react'

export const NuevoEmpleado = () => {
    return (
        <div>
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
                    <div className="col-md-10">
                      {/* general form elements */}
                      <div className="card card-primary">
                        <div className="card-header" style={{marginTop:"3px"}}>
                            <h3 className="card-title mr-5">Nuevo empleado</h3>
                        </div>
                        {/* /.card-header */}
                        {/* form start */}
                        <form role="form">
                          <div className="card-body">
                          <div className="form-group">
                              <label htmlFor="exampleInputPassword1">Nombre</label>
                              <input type="text" className="form-control" id="...." />
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleInputPassword1">Apellidos</label>
                              <input type="text" className="form-control" id="..." />
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleInputPassword1">Identificación</label>
                              <input type="number" className="form-control" id="..." />
                            </div>
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
                    {/* /.row */}
                  </div>{/* /.container-fluid */}
                </div>
              </section>
          </>
        </div>
    )
}
