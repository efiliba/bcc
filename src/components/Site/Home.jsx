import React from 'react';
import ContactUsContainer from '../Admin/ContactUsContainer';
import {Link} from 'react-router';

export default () => (
    <div className="container-fluid" id="content">
        <section className="row title-screen">
            <div className="fill-screen stellar-bg" data-stellar-background-ratio="0.2">
                <img className="img-responsive title-image" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" alt="Logo" data-src="/images/logo.jpg" />
                <Link className="underDevelopment" to={'/carers'}>Features Under Development</Link>
                <div className="down-button">
                    <a className="btn" href="#about">
                        <i className="fa fa-arrow-circle-down fa-4x"></i>
                    </a>
                </div>
            </div>
        </section>

        <section id="about" className="text-banner">
            <h1>ALL ABOUT US</h1>
            <p>Why we are so great</p>
        </section>
        <section id="about-image" className="row">
            <div className="fill-screen"></div>
        </section>

        <section id="services" className="row services-section">
            <div className="services-element col-md-4 wow fadeInLeft">
                <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="/images/care.jpg" />
                <h2>Care</h2>
                <p>Yeah, we do</p>
            </div>
            <div className="services-element col-md-4 wow fadeInLeft">
                <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="/images/compassion.jpg" />
                <h2>Compassion</h2>
                <p>Because we care about caring</p>
            </div>
            <div className="services-element col-md-4 wow fadeInLeft">
                <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="/images/support.jpg" />
                <h2>Support</h2>
                <p>Lending a helping hand</p>
            </div>
        </section>
        <ContactUsContainer/>
    </div>
);