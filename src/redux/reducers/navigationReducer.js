import * as ActionTypes from '../actions/actionTypes';
import * as Actions from '../actions/actions';

export default (state = Actions.INITIAL_STATE['/register'], action) => {
    switch (action.type) {
        case ActionTypes.SET_NAVIGATION_LINKS:
            return Actions.setNavigationLinks(state, action.pathname);
        case ActionTypes.SET_ACTIVE_LINK:
            return Actions.setActiveLink(state, action.link);            
        default:
            return state;
    }
};