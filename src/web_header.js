import React, { Component } from 'react';

import weblogo_text2 from './images/logo_text2.png';
import dot_img from './images/dot.png';

function WebHeader() {
//class WebHeader extends Component {
    return (
        
        <header className="theme-header transparent-header">
            <div className="header-navigation navigation-style-v1">
                <div className="nav-overlay"></div>
                <div className="container-fluid">
                    <div className="primary-menu">
                        <div className="site-branding">
                            <a href="/" className="brand-logo"><img src={weblogo_text2}/></a>
                        </div>
                        <div className="nav-menu">
                            <div className="navbar-close"><i className="far fa-times"></i></div>
                            <nav className="main-menu">
                                <ul>
                                    <li className="menu-item"><a href="#home" className="page-scroll active nav-link">Home</a></li>
                                    <li className="menu-item"><a href="#services" className="page-scroll nav-link">Service</a></li>
                                    <li className="menu-item"><a href="#carakerja" className="page-scroll nav-link">Cara Kerja</a></li>
                                    <li className="menu-item"><a href="#contact" className="page-scroll nav-link">Hubungi Kami</a></li>
                                    <li className="menu-item"><a href="#blog" className="page-scroll nav-link">Blog</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="header-right-nav">
                            <ul>
                                <li className="bar-item"><a href="#"><img src={dot_img} /></a></li>
                                <li className="navbar-toggle-btn">
                                    <div className="navbar-toggler">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default WebHeader;