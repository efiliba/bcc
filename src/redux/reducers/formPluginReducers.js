import * as ActionTypes from '../actions/actionTypes';
import * as Actions from '../actions/actions';

export const contactUsForm = (state, action) => {
    switch (action.type) {
        case ActionTypes.CONTACT_REQUEST_SAVED:
            return Actions.onContactUsSaved(state);
        default:
            return state;
    }
}

export const carerRegisterForm = (state, action) => {
    switch (action.type) {
        case ActionTypes.AVATAR_SELECTED:
            return Actions.avatarSelected(state, action.avatar);
        case ActionTypes.AVATAR_UPLOAD_ERROR:
            return Actions.avatarUploadError(state, action.errorMessage);
        case ActionTypes.CLEAR_UPLOAD_ERROR:
            return Actions.clearUploadError(state);
        default:
            return state;
    }
}