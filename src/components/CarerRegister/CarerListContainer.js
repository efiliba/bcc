import {connect} from 'react-redux';
import CarerList from './CarerList';
import {getCarers} from '../../redux/actionCreators';

CarerList.need = [() => getCarers()];

const mapStateToProps = (state) => ({carers: state.carers});

export default connect(mapStateToProps)(CarerList);