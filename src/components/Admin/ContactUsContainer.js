import {reduxForm} from 'redux-form';
import ContactUs from './ContactUs';
import {saveContactRequest} from '../../redux/actionCreators';

const config = {
    form: 'contactUsForm',                      // Unique name for the form
    fields: ['name', 'email', 'request']        // All the fields in the form
};

const mapStateToProps = (state) => ({submitted: state.form.contactUsForm.submitted});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (data) => {
        dispatch(saveContactRequest(data));
    }
});

export default reduxForm(config, mapStateToProps, mapDispatchToProps)(ContactUs);