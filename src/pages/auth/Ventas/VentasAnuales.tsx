import React from 'react'

export const VentasAnuales = () => {
    return (
        <div>  
            <div className="wrapper">
                    {/* Main Sidebar Container */}
                    {/* Content Wrapper. Contains page content */}
                    <div className="content-wrapper" style={{marginLeft:"0px"}}>
                        {/* /.content-header */}
                        {/* Main content */}
                        <section className="content">
                            <div className="container-fluid">
                                {/* Small boxes (Stat box) */}
                                <div className="row">
                                    <div className="col-5">
                                        {/* small box */}
                                        <div className="small-box bg-danger">
                                            <div className="inner">
                                                <h3>65</h3>
                                                <p>Ventas Anuales</p>
                                            </div>
                                            <div className="icon">
                                                <i className="ion ion-bag" />
                                            </div>
                                            <a href="#" className="small-box-footer">Ver mas....<i className="fas fa-arrow-circle-right" /></a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                            <table id="example1" className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                <th>Producto Vendido</th>
                                                <th>Fecha</th>
                                                <th>Laboratorio</th>
                                                <th>Nombre vendedor</th>
                                                </tr>
                                            </thead>
                                            <tbody>              
                                                <tr>
                                                <td>Trident</td>
                                                <td>Internet
                                                    Explorer 5.0
                                                </td>
                                                <td>Win 95+</td>
                                                <td>5</td>                              
                                                </tr>
                                                <tr>
                                                <td>Trident</td>
                                                <td>Internet
                                                    Explorer 5.5
                                                </td>
                                                <td>Win 95+</td>
                                                <td>5.5</td>                                  
                                                </tr>
                                                <tr>
                                                <td>Trident</td>
                                                <td>Internet
                                                    Explorer 6
                                                </td>
                                                <td>Win 98+</td>
                                                <td>6</td>                                   
                                                </tr>
                                                <tr>
                                                <td>Trident</td>
                                                <td>Internet Explorer 7</td>
                                                <td>Win XP SP2+</td>
                                                <td>7</td>                                        
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
                                </div>
                                {/* /.row */}
                            </div>{/* /.container-fluid */}
                        </section>
                        {/* /.content */}
                    </div>
                    {/* /.content-wrapper */}
                    </div>
            {/* ./wrapper */}
        </div>
    )
}
