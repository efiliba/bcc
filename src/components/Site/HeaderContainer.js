import {connect} from 'react-redux';
import Header from './Header';
import {getCarers} from '../../redux/actionCreators';

Header.need = [() => getCarers()];              // Pre-load carers - problem loading on navigation

const mapStateToProps = (state) => ({
    links: state.get('nav_links')
});

export default connect(mapStateToProps)(Header);