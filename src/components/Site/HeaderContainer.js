﻿import {connect} from 'react-redux';
import Header from './Header';
import {getCarers} from '../../redux/actionCreators';

Header.need = [() => getCarers()];              // Pre-load carers - problem loading on navigation

const mapStateToProps = (state) => ({
        links: state.getIn(['nav_links', 'list']),
        activeLink: state.getIn(['nav_links', 'active_link'])
    });

export default connect(mapStateToProps)(Header);