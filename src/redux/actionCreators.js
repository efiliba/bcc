import * as ActionTypes from './actions/actionTypes';
import fetch from 'isomorphic-fetch';
import {apiUrl} from '../../config';

export const saveContactRequest = (data) => (dispatch) => 
    fetch(`${apiUrl}/saveContactRequest`, {
        method: 'post',
        body: JSON.stringify({contactRequest: data}),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then((response) => dispatch({
        type: ActionTypes.CONTACT_REQUEST_SAVED
    }))
    .catch((err) => console.log('Error in saveContactRequest API', err));

export const getCarers = () => (dispatch) => fetch(`${apiUrl}/carers`)
    .then((response) => response.json())
    .then((response) => dispatch({
        type: ActionTypes.ADD_CARERS,
        carers: response.carers
    }))
    .catch((err) => console.log('Error in getCarers API', err));

export const getCarer = (id) => (dispatch) => fetch(`${apiUrl}/carer?id=${id}`)
    .then((response) => response.json())
    .then((response) => dispatch({
        type: ActionTypes.SET_SELECTED_CARER,
        carer: response.carer
    }));

export const registerCarer = (data) => (dispatch) => fetch(`${apiUrl}/saveCarer`, {
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

export const setNavigationLinks = (location) => ({
    type: ActionTypes.GET_NAVIGATION_LINKS,
    pathname: location.pathname
});