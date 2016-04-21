import {List, Map} from 'immutable';
import request from 'superagent';
import {apiUrl} from '../../../config';

export const INITIAL_CARER_STATE = List();

export const HOME_LINKS = List.of(
    Map({
        label: "Home",
        href: '#top'
    }),
    Map({
        label: "About Us",
        href: "#about" 
    }),
    Map({
        label: "Services",
        href: "#services" 
    }),
    Map({
        label: "Contact Us",
        href: "#contactUsForm" 
    })
);

export const NAVIGATION_LINKS = List.of(
    Map({
        label: "Home",
        link: '/'
    }),
    Map({
        label: "Register",
        link: '/register'
    }),
    Map({
        label: "Carers",
        link: '/carers'
    })
);

export const INITIAL_HOME_STATE = Map({
    nav_links: HOME_LINKS,
    carers: INITIAL_CARER_STATE
});

export const INITIAL_NAVIGATION_STATE = Map({
    nav_links: NAVIGATION_LINKS,
    carers: INITIAL_CARER_STATE
});

export const setNavigationLinks = (state, pathname) => (pathname == '/' ? HOME_LINKS : NAVIGATION_LINKS).toJS();

export const addCarers = (state, carers) => carers;

export const setSelectedCarer = (state, carer) => state;

export const addRegisteredCarer = (state, carer) => {
    return [Object.assign({}, carer, {
        _id: carer.avatarFileName,              // Temp id
        availability: [],
        services: [],
        preferences: [],
        qualifications: []
    }), ...state];
};

export const onContactUsSaved = (state) => ({
    submitted: true,
    request: {
        value: ''                               // textarea values have to be explicitly cleared
    }
});

export const avatarSelected = (state, avatar) => {
    const fieldname = Date.now() + '-' + avatar.name;
    const req = request.post(`${apiUrl}/avatar`);
    req.attach(fieldname, avatar);

    let nextState = Object.assign({}, state);
    delete nextState.avatarUploadError;

    req.end((req, res) => {
        if (res.error) {
            nextState.avatarUploadError = 'There was an error uploading the image: ' + res.error;
            console.log(res.text);
        }
    });

    nextState.avatar = avatar;                  // Avatar File does not show in DevTools - needed for preview
    nextState.avatarFileName = fieldname;
    return nextState;
};

export const avatarUploadError = (state, errorMessage) => Object.assign({}, state, {avatarUploadError: errorMessage});

export const clearUploadError = (state) => {
    let nextState = Object.assign({}, state);
    delete nextState.avatarUploadError;
    return nextState;
};

// DELETE:
// return state.filter((key) => key.id != id);

// EDIT:
// return state.map((key) => key.id == id ?
//      Object.assign({}, key, { newField: value }) : key
// );