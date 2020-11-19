import React from 'react'

export const Empleados = () => {
    return (
        <div>
            <>
  <div className="modal fade" id="cambiocontra" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Cambiar Contraseña</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="text-center">
            <img src="./img/avatar.png" className="profile-user-img img-fluid img-circle" />
          </div>
          <div className="text-center">
            <b><h1>Freddy simanca</h1></b>
          </div>
          <div className="alert alert-success text-center" id="update" style={{display: 'none'}}>
            <span><i className="fas fa-check m-1" />Contraseña cambiada</span>
          </div>
          <div className="alert alert-danger text-center" id="noupdate" style={{display: 'none'}}>
            <span><i className="fas fa-times m-1" />Contraseña incorrecta</span>
          </div>
          <form id="form-pass">
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
          </form></div>
        <div className="modal-footer">
          <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Cerrar</button>
          <button type="submit" className="btn bg-gradient-primary">Guardar</button>
        </div>
      </div>
    </div>
  </div>
  {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-12">
          <div className="col-sm-12">
            <h1>Datos personales</h1>
          </div>
          <div className="col-sm-6">
          </div>
        </div>
      </div>{/* /.container-fluid */}
    </section>
    <section>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="card card-success card-outline">
                <div className="card-body box-profile">
                  <div className="text-center">
                    <img src="../img/avatar.png" alt="avatar" className="profile-user-img img-fluid img-circle" />
                  </div>
                  <input id="id_usuario" type="hidden" defaultValue="Admin" />
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
                      <b style={{color: '#0B7300'}}>Tipo Usuario</b><span id="us_tipo" className="float-right badge badge-primary">Administrador</span>
                    </li>
                    <button data-toggle="modal" data-target="#cambiocontra" type="button" className="btn btn-block btn-outline-warning btn-sm">Cambiar contraseña</button>
                  </ul>
                </div>
              </div>
              <div className="card card-success">
                <div className="card-header">
                  <h3 className="card-title">Sobre mi</h3>
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
                <div className="card-footer">
                  <p className="text-muted">Click en boton si desea editar</p>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="card card-success">
                <div className="card-header">
                  <h3 className="card-title">Editar datos personales</h3>
                </div>
                <div className="card-body">
                  <div className="alert alert-success text-center" id="editado" style={{display: 'none'}}>
                    <span><i className="fas fa-check m-1" />Editado</span>
                  </div>
                  <div className="alert alert-danger text-center" id="noeditado" style={{display: 'none'}}>
                    <span><i className="fas fa-times m-1" />Edición deshabilitada</span>
                  </div>
                  <form id="form-usuario" className="form-horizontal">
                    <div className="form-group row">
                      <label htmlFor="telefono" className="col-sm-2 col-form-label">Telefono</label>
                      <div className="col-sm-10">
                        <input type="number" id="telefono" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="residencia" className="col-sm-2 col-form-label">Dirección</label>
                      <div className="col-sm-10">
                        <input type="text" id="residencia" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="correo" className="col-sm-2 col-form-label">Correo</label>
                      <div className="col-sm-10">
                        <input type="email" id="correo" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="sexo" className="col-sm-2 col-form-label">Sexo</label>
                      <div className="col-sm-10">
                        <input type="text" id="sexo" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="adicional" className="col-sm-2 col-form-label">Información adicional</label>
                      <div className="col-sm-10">
                        <textarea className="form-control" id="adicional" cols={30} rows={10} defaultValue={""} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="offset-sm-2 col-sm-10 float-right">
                        <button className="btn btn-block btn-outline-success">Guardar</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="card-footer">
                  <p className="text-muted">Cuidado con ingresar datos erroneos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Main content */}
    {/* /.content */}
  </div>
</>

        </div>
    )
}
