import * as ActionTypes from '../actions/actionTypes';
import * as Actions from '../actions/actions';

export default (state = Actions.INITIAL_CARER_STATE, action) => {
    switch (action.type) {   
        case ActionTypes.ADD_CARERS:
            return Actions.addCarers(state, action.carers);
        case ActionTypes.SET_SELECTED_CARER:
            return Actions.setSelectedCarer(state, action.carer);
        case ActionTypes.ADD_REGISTERED_CARER:
            return Actions.addRegisteredCarer(state, action.carer);
        default:
            return state;
    }
};