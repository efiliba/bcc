import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import configureStore from './src/redux/configureStore';
import DevTools from './src/components/DevTools';
import routes from './src/routes';
import {setNavigationLinks} from './src/redux/actionCreators';

//import createBrowserHistory from 'history/lib/createBrowserHistory';

const store = configureStore(window.__INITIAL_STATE__);
const dest = document.getElementById('root');

browserHistory.listen((location) => store.dispatch(setNavigationLinks(location)));

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    dest
);

if (process.env.NODE_ENV !== 'production') {
    window.React = React;                       // enable debugger

    if (!dest || !dest.firstChild || !dest.firstChild.attributes || !dest.firstChild.attributes['data-react-checksum']) {
        console.error('*** TRY RESTART SERVER ***: Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.'); // eslint-disable-line
    }
}

if (process.env.CLIENT) {
    render(
        <Provider store={store} key="provider">
            <div>
                <Router history={browserHistory} routes={routes}/>
                <DevTools />
            </div>
        </Provider>,
        dest
    );
}