import {connect} from 'react-redux';
import Home from './Home';
import * as Actions from '../../redux/actionCreators';
import {browserHistory} from 'react-router';

//const mapStateToProps = (state) => ({
//    links: state.nav_links
//});

const mapDispatchToProps = (dispatch) => ({
    handleClick: () => {
        dispatch(Actions.getNavigationLinks());
        browserHistory.push('/carers');
    }
});

//export default connect(mapStateToProps, mapDispatchToProps)(Header);
export default connect(null, mapDispatchToProps)(Home);