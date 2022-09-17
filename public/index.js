import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import logoAlta from '../src/images/logoAlta.png';
import fotoku from '../src/images/fotoku.jpg';

var Index = React.createClass({
    render: function () {
        return (
            <body class = "home-background">
            <div>
                <header>
                    <div className="container h-20">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                                <div className="alterra">
                                    <a href="index.html">
                                        <img src={logoAlta} className="logo" alt="logoAlta" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="container">
                                    <div className="row align-items-center navig">
                                        <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right">
                                            <a href="index.html" className="aktif"> HOME </a>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center">
                                            <a href="about.html"> ABOUT </a>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-left">
                                            <a href="experience.html"> EXPERIENCE </a>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right">
                                            <a href="form.html"> CONTACT </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="container">
                    <div className="row align-items-center isi-home">
                        <div className="col-lg-4 col-md-12 col-sm-12  col-12">
                            <img src={fotoku} className="profil" alt="fotoku" />
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                            <div className="main-p">
                                <p className="sapaan"> Hi, my name is </p>
                                <p className="nama"> Anne Sullivan</p>
                                <p className="hobi"> I build things for the web</p>
                                <p className="tombol">
                                    <a href="about.html"> Get In Touch</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </body>
        );
    }
});

export default Index;