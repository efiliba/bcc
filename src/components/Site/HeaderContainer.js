import {connect} from 'react-redux';
import Header from './Header';
import {getCarers} from '../../redux/actionCreators';
Header.need = [() => getCarers()];      // Pre-load carers - problem loading on navigation

const mapStateToProps = (state) => ({
    links: state.nav_links
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (data) => {
        dispatch(null);
    }
});

//export default connect(mapStateToProps, mapDispatchToProps)(Header);
export default connect(mapStateToProps)(Header);