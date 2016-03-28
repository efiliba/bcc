import React from 'react';

export default ({children}) => (
    <div>
        <header id="top">
            <nav className="navbar navbar-fixed-top navbar-dark bg-inverse cbp-af-header">
                <a href="#top">
                    <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="/images/logo.jpg" />
                </a>
                <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    &#9776;
                </button>
                <div className="collapse navbar-toggleable-xs" id="collapsingNavbar">
                    <ul className="nav navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#top">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contactUsForm">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        {children}
    </div>
);