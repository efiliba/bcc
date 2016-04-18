import React from 'react';
import {connect} from 'react-redux';
import Home from './Home';
import {browserHistory} from 'react-router';
import {staticFiles} from '../../../config';

class HomeContainer extends React.Component {
    render() {
        return <Home handleClick={this.props.handleClick}/>;
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

const mapDispatchToProps = (dispatch) => ({
    handleClick: () => {
        browserHistory.push('/carers');
    }
});

export default connect(null, mapDispatchToProps)(HomeContainer);