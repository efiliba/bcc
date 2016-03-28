import * as ActionTypes from './actions/actionTypes';
import fetch from 'isomorphic-fetch';
import config from '../../server/config';

export const saveContactRequest = (data) => (dispatch) => fetch(`${config.baseURL}/api/saveContactRequest`, {
        method: 'post',
        body: JSON.stringify({contactRequest: data}),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then((response) => dispatch({
        type: ActionTypes.CONTACT_REQUEST_SAVED
    }));

export const getCarers = () => (dispatch) => fetch(`${config.baseURL}/api/getCarers`)
    .then((response) => response.json())
    .then((response) => dispatch({
        type: ActionTypes.ADD_CARERS,
        carers: response.carers
    }))
    .catch((err) => {console.log('Error in getCarers API', err);});

export const getCarer = (id) => (dispatch) => fetch(`${config.baseURL}/api/getCarer?id=${id}`)
    .then((response) => response.json())
    .then((response) => dispatch({
        type: ActionTypes.SET_SELECTED_CARER,
        carer: response.carer
    }));

export const registerCarer = (data) => (dispatch) => fetch(`${config.baseURL}/api/saveCarer`, {
        method: 'post',
        body: JSON.stringify({carer: data}),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then((response) => dispatch({
        type: ActionTypes.CARER_REGISTERED
    }));

export const avatarSelected = (avatar) => ({
    type: ActionTypes.AVATAR_SELECTED,
    avatar
});