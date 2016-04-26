import {connect} from 'react-redux';
import CarerList from './CarerList';
import {getCarers} from '../../redux/actionCreators';

const mapStateToProps = (state) => ({carers: state.getIn(['carers', 'list'])});

export default connect(mapStateToProps)(CarerList);