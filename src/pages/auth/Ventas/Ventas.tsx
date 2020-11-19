import React from 'react'

export const Ventas = () => {
    return (
        <div>
            <>
                <div className="wrapper">
                {/* Main Sidebar Container */}
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                    {/* /.content-header */}
                    {/* Main content */}
                    <section className="content">
                        <div className="container-fluid">
                            {/* Small boxes (Stat box) */}
                            <div className="row">
                            <div className="col-lg-7">
                                {/* small box */}
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>150</h3>
                                        <p>Ventas diarias</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-bag" />
                                    </div>
                                    <a href="#" className="small-box-footer">Ver mas... <i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>
                            {/* ./col */}
                            <div className="col-lg-7">
                                {/* small box */}
                                <div className="small-box bg-success">
                                    <div className="inner">
                                        <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
                                        <p>Ventas semanales</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-bag" />
                                    </div>
                                    <a href="#" className="small-box-footer">Ver mas...<i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>
                            {/* ./col */}
                            <div className="col-lg-7">
                                {/* small box */}
                                <div className="small-box bg-warning">
                                <div className="inner">
                                    <h3>44</h3>
                                    <p>Ventas mensuales</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-bag" />
                                </div>
                                <a href="#" className="small-box-footer">Ver mas...<i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>
                            {/* ./col */}
                            <div className="col-lg-7">
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
                            {/* ./col */}
                            </div>
                            {/* /.row */}
                        </div>{/* /.container-fluid */}
                    </section>
                    {/* /.content */}
                </div>
                {/* /.content-wrapper */}
                </div>
                {/* ./wrapper */}
            </>
        </div>
    );
}
