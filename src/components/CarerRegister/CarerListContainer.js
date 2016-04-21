import {connect} from 'react-redux';
import CarerList from './CarerList';
import {getCarers} from '../../redux/actionCreators';

CarerList.need = [() => getCarers()];

const mapStateToProps = (state) => ({carers: state.get('carers')});

export default connect(mapStateToProps)(CarerList);