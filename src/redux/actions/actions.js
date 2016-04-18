import request from 'superagent';
import {apiUrl} from '../../../config';

export const HOME_LINKS = [{
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
}];

export const NAVIGATION_LINKS = [{
    label: "Home",
    link: '/'
}, {
    label: "Register",
    link: '/register'
}, {
    label: "Carers",
    link: '/carers'
}];

export const INITIAL_CARER_STATE = ({
    list: []
});

export const INITIAL_HOME_STATE = {
    nav_links: HOME_LINKS,
    carers: INITIAL_CARER_STATE
};

export const INITIAL_NAVIGATION_STATE = {
    nav_links: NAVIGATION_LINKS,
    carers: INITIAL_CARER_STATE
};

export const getNavigationLinks = (state, pathname) => pathname == '/' ? HOME_LINKS : NAVIGATION_LINKS;

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