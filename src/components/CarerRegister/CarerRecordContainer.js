import {connect} from 'react-redux';
import CarerRecord from './CarerRecord';
import {getCarer} from '../../redux/actionCreators';

CarerRecord.need = [(params) => getCarer(params.id)];

const mapStateToProps = (state) => ({carer: state.carer});

export default connect(mapStateToProps)(CarerRecord);