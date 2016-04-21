import {reduxForm} from 'redux-form';
import CarerRegister from './CarerRegister';
import * as Actions from '../../redux/actionCreators';
import {browserHistory} from 'react-router';

const config = {
    form: 'carerRegisterForm',
    fields: ['name', 'email', 'profile'],
    getFormState: (state) => state.get('form')
};

let saveAvatarFileName;                         // Save avatar file name so that it can be called in dispatch props

const mapStateToProps = (state) => {
    saveAvatarFileName = () => state.get('form').carerRegisterForm.avatarFileName;

    return {
        submitted: false,
        avatarUploadError: state.get('form').carerRegisterForm.avatarUploadError
    };
};

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (data) => {
        data.avatarFileName = saveAvatarFileName();
        dispatch(Actions.registerCarer(data));
        browserHistory.push('/carers');        
    }
});

export default reduxForm(config, mapStateToProps, mapDispatchToProps)(CarerRegister);