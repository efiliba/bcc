import request from 'superagent';
import {baseURL} from '../../../server/config';

export const INITIAL_STATE = { carers: { list: []} };

export const addCarers = (state, carers) => carers;

export const setSelectedCarer = (state, carer) => state;

export const onContactUsSaved = (state) => {
    return {
        submitted: true,
        request: {
            value: ''                           // textarea values have to be explicitly cleared
        }
    };
};

export const avatarSelected = (state, avatar) => {
    const fieldname = Date.now() + '-' + avatar.name;
    const req = request.post(`${baseURL}/saveAvatar`);
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