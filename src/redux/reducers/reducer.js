import * as ActionTypes from '../actions/actionTypes';
import * as Actions from '../actions/actions';

export default (state = Actions.INITIAL_STATE, action) => {
    switch (action.type) {   
        case ActionTypes.ADD_CARERS:
            return Actions.addCarers(state, action.carers);
        case ActionTypes.SET_SELECTED_CARER:
            return Actions.setSelectedCarer(state, action.carer);
        case ActionTypes.AVATAR_LOADED:
            debugger;
            console.log('AVATAR_LOADED');
            return state;
        default:
            return state;
    }
};