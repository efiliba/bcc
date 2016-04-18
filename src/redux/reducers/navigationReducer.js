import * as ActionTypes from '../actions/actionTypes';
import * as Actions from '../actions/actions';

export default (state = Actions.INITIAL_NAVIGATION_STATE, action) => {
    switch (action.type) {
        case ActionTypes.GET_NAVIGATION_LINKS:
            return Actions.getNavigationLinks(state, action.pathname);
        default:
            return state;
    }
};