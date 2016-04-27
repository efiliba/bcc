import React from 'react';
import {Link} from 'react-router';
import Immutable from 'immutable';
import {staticFiles} from '../../../config';

const Header = ({children, links, activeLink}) => {
    const isActive = (active) => active ? ' active' : '';
    const navbars = links.map((link) => {
        const label = link.get('label');
        const href = link.get('href');
        const to = link.get('to');
        return (
            <li className="nav-item" key={label}>
                {href && <a className={'nav-link nav-anchor' + isActive(link.get('active'))} href={href}>{label}</a>}
                {to && <Link className={'nav-link' + isActive(to == activeLink)} to={to}>{label}</Link>}
            </li>
        );
    });
    return (
        <div>
            <header id="top">
                <nav className="navbar navbar-fixed-top navbar-dark bg-inverse cbp-af-header">
                    <Link to="/">
                        <img src={staticFiles + "/images/logo.jpg"}/>
                    </Link>
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

Header.propTypes = {
    children: React.PropTypes.object,
    links: React.PropTypes.instanceOf(Immutable.List),
    activeLink: React.PropTypes.string
};

export default Header;