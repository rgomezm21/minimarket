import React from 'react';

export const Crearmedicinas = () => {
    return (
        <div>
            <>
                <section className="content">
                  <div className="container-fluid">
                    <div className="row">
                      {/* left column */}
                      <div className="col-md-6">
                        {/* general form elements */}
                        <div className="card card-primary">
                          <div className="card-header">
                            <h3 className="card-title">Crear nuevo medicamento</h3>
                          </div>
                          {/* /.card-header */}
                          {/* form start */}
                          <form role="form">
                            <div className="card-body">
                              <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Nombre medicamento</label>
                                <input type="number" className="form-control" id="exampleInputEmail1" />
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Fecha de expedicion</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" />
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputPassword1">fecha vencimiento</label>
                                <input type="email" className="form-control" id="exampleInputPassword1"  />
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Laboratorio</label>
                                <input type="text" className="form-control" id="exampleInputPassword1"  />
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Proveedor</label>
                                <input type="text" className="form-control" id="exampleInputPassword1"  />
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Observaciones</label>
                                <textarea className="form-control" id="exampleInputPassword1"  />
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
                </section>
            </>
        </div>
    );
}
