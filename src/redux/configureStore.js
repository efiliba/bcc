import {createStore, compose, combineReducers, applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {Map} from 'immutable';
import carerReducer from './reducers/carerReducer';
import navigationReducer from './reducers/navigationReducer';
import {contactUsForm, carerRegisterForm} from './reducers/formPluginReducers';
import thunk from 'redux-thunk';
import DevTools from '../components/DevTools';

export default (initialState) => {
    let storeBuilder;
    if (process.env.CLIENT) {
        storeBuilder = compose(
            applyMiddleware(thunk),
            DevTools.instrument()               // For Redux Dev Tools - storeEnhancer()
        );
    } else {
        storeBuilder = applyMiddleware(thunk);
    }

    const reducers = combineImmutableReducers(navigationReducer, carerReducer);
    const store = storeBuilder(createStore)(reducers, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers/carerReducer', () => {

            /// May need to add formReducer using combineReducers for replaceReducer
            /// http://moox.io/statinamic/docs/advanced/redux/

            const nextReducer = require('./reducers/carerReducer');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
};

const combineImmutableReducers = (navigationReducer, carerReducer) => {
    const reducers = combineReducers({
        nav_links: navigationReducer,
        carers: carerReducer,
        form: formReducer.plugin({              // Add plugin to formReducer
            contactUsForm,                      //    to clear the form
            carerRegisterForm                   //    to set the avatar preview
        })
    });

    return (state = {}, action) => Map(reducers(
		Map.isMap(state) ? state.toObject() : state, action));
};