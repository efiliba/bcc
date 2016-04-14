import {connect} from 'react-redux';
import Header from './Header';

const mapStateToProps = (state) => ({
    links: [{
        label: "Home",
        link: '/'
    }, {
        label: "Carers",
        link: '/carers'
    }, {
        label: "Register",
        link: '/register'
    }, {        
        label: "Top",
    }, {
        label: "About Us",
        href: "#about" 
    }, {
        label: "Services",
        href: "#services" 
    }, {
        label: "Contact Us",
        href: "#contactUsForm" 
    }]
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (data) => {
        dispatch(null);
    }
});

//export default connect(mapStateToProps, mapDispatchToProps)(Header);
export default connect(mapStateToProps)(Header);