import {List, Map, fromJS} from 'immutable';
import request from 'superagent';
import {apiUrl} from '../../../config';

export const INITIAL_CARER_STATE = Map();

const HOME_LINKS = List.of(
    Map({
        label: "Home",
        href: '#top',
        active: true
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

const NAVIGATION_LINKS = List.of(
    Map({
        label: "Home",
        to: '/'
    }),
    Map({
        label: "Register",
        to: '/register'
    }),
    Map({
        label: "Carers",
        to: '/carers'
    })
);

export const INITIAL_STATE = {
    '/': Map({
        nav_links: Map({
            list: HOME_LINKS,
            active_link: '/'
        })
    }),
    '/register': Map({
        nav_links: Map({
            list: NAVIGATION_LINKS,
            active_link: '/register'
        })
    }),
    '/carers': Map({
        nav_links: Map({
            list: NAVIGATION_LINKS,
            active_link: '/carers'
        })
    })
};

export const setNavigationLinks = (state, pathname) => state
    .set('list', pathname == '/' ? HOME_LINKS : NAVIGATION_LINKS)
    .set('active_link', pathname);

export const setActiveLink = (state, link) => state.set('active_link', link);

export const addCarers = (state, carers) => state.set('list', fromJS(carers));

export const setSelectedCarer = (state, carer) => state;

export const saveAvatarPreview = (state, preview) => state.set('preview', preview);

export const addRegisteredCarer = (state, carer) => {
    var addCarer = Object.assign({
        _id: carer.avatarFileName,              // Temp id
        availability: [],
        services: [],
        preferences: [],
        qualifications: [],
        highlight: true,
        preview: state.get('preview')
    },  carer);

    return state.update('list', (carers) => carers.unshift(fromJS(addCarer)))
        .delete('preview');                     // Remove the avatar preview - saved in carer now
};

export const onContactUsSaved = (state) => ({
    submitted: true,
    request: {
        value: ''                               // textarea values have to be explicitly cleared
    }
});

export const avatarSelected = (state, avatar) => {
    const avatarFileName = Date.now() + '-' + avatar.name;
    const req = request.post(`${apiUrl}/avatar`);
    req.attach(avatarFileName, avatar);

    let nextState = Object.assign({avatarFileName}, state);
    delete nextState.avatarUploadError;

    req.end((req, res) => {
        if (res.error) {
            nextState.avatarUploadError = 'There was an error uploading the image: ' + res.error;
            console.log(res.text);
        }
    });

    return nextState;
};

export const avatarUploadError = (state, errorMessage) => Object.assign({}, state, {avatarUploadError: errorMessage});

export const clearUploadError = (state) => {
    let nextState = Object.assign({}, state);
    delete nextState.avatarUploadError;
    return nextState;
};

export const removeRegisteredHighlight = (state) => state.deleteIn(['list', 0, 'highlight']);