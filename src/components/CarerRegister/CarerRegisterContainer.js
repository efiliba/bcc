import {reduxForm} from 'redux-form';
import CarerRegister from './CarerRegister';
import * as Actions from '../../redux/actionCreators';

const config = {
    form: 'carerRegisterForm',
    fields: ['name', 'email', 'profile']
};

let saveAvatarFileName;                         // Save avatar file name so that it can be called in dispatch props

const mapStateToProps = (state) => {
    saveAvatarFileName = () =>  state.form.carerRegisterForm.avatarFileName;

    return {
        submitted: false
    };
};

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (data) => {
        dispatch(Actions.registerCarer(Object.assign({}, data, {avatarFileName: saveAvatarFileName()})));
    }
});

export default reduxForm(config, mapStateToProps, mapDispatchToProps)(CarerRegister);