import request from 'superagent';
import {apiUrl} from '../../../config';

export const INITIAL_NAVIGATION_STATE = {
    nav_links: [{
        label: "Home",
        href: '#top'
    }, {
        label: "About Us",
        href: "#about" 
    }, {
        label: "Services",
        href: "#services" 
    }, {
        label: "Contact Us",
        href: "#contactUsForm" 
    }]
};

export const INITIAL_CARER_STATE = { 
    carers: { 
        list: []
    }
};

export const INITIAL_STATE = {
    nav_links: INITIAL_NAVIGATION_STATE.nav_links,
    carers: INITIAL_CARER_STATE.carers
};

export const getHomeLinks = () => INITIAL_NAVIGATION_STATE.nav_links;

export const getNavigationLinks = () => [
    {
        label: "Home",
        link: '/'
    }, {
        label: "Register",
        link: '/register'
    }, {
        label: "Carers",
        link: '/carers'
    }
];

export const addCarers = (state, carers) => {
    //state.list.push(...carers);
    state.list = carers;
    return state;
};

export const setSelectedCarer = (state, carer) => state;

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

    req.end((req, res) => {
        if (res.error) {
            state.error = res.text;
        }
    });

    state.avatar = avatar;                      // Avatar File does not show in DevTools - needed for preview
    state.avatarFileName = fieldname;
    return state;
};