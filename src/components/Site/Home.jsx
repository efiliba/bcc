import React from 'react';
import ContactUsContainer from '../Admin/ContactUsContainer';
import Footer from './Footer';
import {staticFiles} from '../../../config';

const HomeHoC = (InnerComponent) => class extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <InnerComponent {...this.state} {...this.props}/>;
    }

    componentDidMount() {
        // Set src of all img's to it's data-src value (deferred images)
        $('img[data-src]').each(function() {
            this.src = staticFiles + $(this).data("src");
        });

        $('section#about-image div.fill-screen').css("background-image", `url(${staticFiles}/images/beach.jpg)`);

        // Add smooth scrolling animation to the anchors
        $('.nav-anchor, .down-button a').bind('click', function() {
            $('html, body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top - 100
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });

        // Resize header on scroll
        $('body').scrollspy({ 
            target: '.navbar',
            offset: 160
        });
    }
};

const Home = ({handleClick}) => (
    <div className="container-fluid" id="content">
        <section className="row title-screen">
            <div className="fill-screen stellar-bg" data-stellar-background-ratio="0.2">
                <img className="img-responsive title-image" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" alt="Logo" data-src="/images/logo.jpg" />
                <a className="underDevelopment" onClick={handleClick}>Features Under Development</a>
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
        <Footer/>
    </div>
);

export default HomeHoC(Home);