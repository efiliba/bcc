import {createStore, compose, combineReducers, applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form';
import carersReducer from './reducers/reducer';
import {contactUsForm, carerRegisterForm} from './reducers/formPluginReducers';
import thunk from 'redux-thunk';
import DevTools from '../components/DevTools';

export default (initialState = {}) => {
    let storeBuilder;
    if (process.env.CLIENT) {
        storeBuilder = compose(
            applyMiddleware(thunk),
            DevTools.instrument()               // For Redux Dev Tools - storeEnhancer()
        );
    } else {
        storeBuilder = applyMiddleware(thunk);
    }

    const reducers = {
        carers: carersReducer,
        form: formReducer.plugin({              // Add plugin to formReducer
            contactUsForm,                      //    to clear the form
            carerRegisterForm                   //    to set the avatar preview
        })
    };
    const reducer = combineReducers(reducers);

    const store = storeBuilder(createStore)(reducer, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers/reducer', () => {

            /// May need to add formReducer using combineReducers for replaceReducer
            /// http://moox.io/statinamic/docs/advanced/redux/

            const nextReducer = require('./reducers/reducer');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
};