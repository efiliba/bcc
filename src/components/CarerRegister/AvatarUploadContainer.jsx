import {connect} from 'react-redux';
import AvatarUpload from './AvatarUpload';
import * as Actions from '../../redux/actionCreators';

const mapStateToProps = (state) => ({avatar: state.form.carerRegisterForm.avatar});

const mapDispatchToProps = (dispatch) => ({
    handleAvatarSelected: (files) => {
        switch (true) {
            case !files[0].type.startsWith('image'):
                console.log('File not an image: ', files[0].type);
                break;
            case files[0].size > 11000:
                console.log('File too big: ', files[0].size);
                break;
            default:
                dispatch(Actions.avatarSelected(files[0]));
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AvatarUpload);