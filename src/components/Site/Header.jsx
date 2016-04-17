import React from 'react';
import {Link} from 'react-router';

const Header = ({children, links, active}) => {
    const navbars = links.map((link) => (
        <li className="nav-item" key={link.label}>
            {link.href && <a className="nav-link nav-anchor" href={link.href}>{link.label}</a>}
            {link.link && <Link className="nav-link" to={link.link}>{link.label}</Link>}
        </li>
    ));
    return (
        <div>
            <header id="top">
                <nav className="navbar navbar-fixed-top navbar-dark bg-inverse cbp-af-header">
                    <a href="#top">
                        <img src="/images/logo.jpg" />
                    </a>
                    <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                        &#9776;
                    </button>
                    <div className="collapse navbar-toggleable-xs" id="collapsingNavbar">
                        <ul className="nav navbar-nav">
                            {navbars}
                        </ul>
                    </div>
                </nav>
            </header>
            {children}
        </div>
    );
};

export default Header;