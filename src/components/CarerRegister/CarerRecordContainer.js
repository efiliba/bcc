import {connect} from 'react-redux';
import CarerRecord from './CarerRecord';
import {getCarer} from '../../redux/actionCreators';

CarerRecord.need = [(params) => getCarer(params.id)];

const mapStateToProps = (state) => { 
    
    // NOT CALLED

    console.log('--- carer record ---', state);
    
    return ({carer: state.carer});
};

export default connect(mapStateToProps)(CarerRecord);