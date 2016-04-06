import {connect} from 'react-redux';
import CarerList from './CarerList';
import {getCarers, getAvatar} from '../../redux/actionCreators';

//CarerList.need = [() => getCarers(), (params) => getAvatar(params.id)];
CarerList.need = [() => getCarers()];

const mapStateToProps = (state) => {
    console.log('HERE:' + state.carers[0].avatarFileName);
    //const avatar = getAvatar(state.carers[0].avatarFileName);
    const avatar = getAvatar('1459312373796-3D.jpg');
    
    console.log(avatar());
    debugger;
    return {carers: state.carers};
};

export default connect(mapStateToProps)(CarerList);