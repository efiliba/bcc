import * as ActionTypes from '../actions/actionTypes';
import * as Actions from '../actions/actions';

export default (state = Actions.INITIAL_STATE['/'], action) => {
    switch (action.type) {   
        case ActionTypes.ADD_CARERS:
            return Actions.addCarers(state, action.carers);
        case ActionTypes.SET_SELECTED_CARER:
            return Actions.setSelectedCarer(state, action.carer);
        case ActionTypes.ADD_REGISTERED_CARER:
            return Actions.addRegisteredCarer(state, action.carer);
        case ActionTypes.SAVE_AVATAR_PREVIEW:
            return Actions.saveAvatarPreview(state, action.preview);
        case ActionTypes.REMOVE_REGISTERED_HIGHLIGHT:
            return Actions.removeRegisteredHighlight(state);
        default:
            return state;
    }
};