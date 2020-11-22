import React from 'react';

export const ListaMedicinas = () => {
    return (
        <div>
            <section className="content">
                  <div className="container-fluid">
                    <div className="row">
                      {/* left column */}
                      <div className="col-md-12">
                        {/* general form elements */}
                        <div className="card card-primary">
                          {/* form start */}
                          <section className="content">
                            <div className="container-fluid">
                                <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title mr-5">Buscar Medicamento</h3>
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
                                    <div className="card-body">
                                        <table id="example1" className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                            <th>Nombre</th>
                                            <th>Fecha vencimiento</th>
                                            <th>Laboratorio</th>
                                            <th>Proveedor</th>
                                            <th>Opciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td>Trident</td>
                                            <td>Internet
                                                Explorer 4.0
                                            </td>
                                            <td>Win 95+</td>
                                            <td> 4</td>
                                            <td><button type="submit" className="btn btn-primary mr-3">Modificar</button>                                          
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>Trident</td>
                                            <td>Internet
                                                Explorer 5.0
                                            </td>
                                            <td>Win 95+</td>
                                            <td>5</td>
                                            <td>C</td>
                                            </tr>
                                            <tr>
                                            <td>Trident</td>
                                            <td>Internet
                                                Explorer 5.5
                                            </td>
                                            <td>Win 95+</td>
                                            <td>5.5</td>
                                            <td>A</td>
                                            </tr>
                                            <tr>
                                            <td>Trident</td>
                                            <td>Internet
                                                Explorer 6
                                            </td>
                                            <td>Win 98+</td>
                                            <td>6</td>
                                            <td>A</td>
                                            </tr>
                                            <tr>
                                            <td>Trident</td>
                                            <td>Internet Explorer 7</td>
                                            <td>Win XP SP2+</td>
                                            <td>7</td>
                                            <td>A</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                            <th>Rendering engine</th>
                                            <th>Browser</th>
                                            <th>Platform(s)</th>
                                            <th>Engine version</th>
                                            <th>CSS grade</th>
                                            </tr>
                                        </tfoot>
                                        </table>
                                    </div>
                                    {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                                </div>
                                {/* /.row */}
                            </div>
                            {/* /.container-fluid */}
                            </section>
                        </div>
                        {/* /.card */}
                      </div>
                      {/*/.col (left) */}
                      {/* /.row */}
                    </div>{/* /.container-fluid */}
                  </div>
                </section>
        </div>
    );
}
