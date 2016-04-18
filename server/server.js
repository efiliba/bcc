import Express from 'express';
import bodyParser from 'body-parser';

// Webpack Requirements
import webpack from 'webpack';
import config from '../webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

// Initialize the Express App
const app = new Express();

if (process.env.NODE_ENV !== 'production') {
    const compiler = webpack(config);
    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
    app.use(webpackHotMiddleware(compiler));
}

// React And Redux Setup
import React from 'react';
import {Provider} from 'react-redux';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router';
import configureStore from '../src/redux/configureStore';

// Import required modules
import routes from '../src/routes';
import {fetchComponentData} from './util/fetchData';
import serverConfig from '../config';
import template from './template';
import {INITIAL_HOME_STATE, INITIAL_NAVIGATION_STATE} from '../src/redux/actions/actions';

// Apply body Parser and server public assets and routes
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(Express.static(serverConfig.serveStaticFiles));

// Server Side Rendering based on routes matched by React-router.
app.use((req, res) => {
    match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
        if (err) {
            return res.status(500).end('Internal server error');
        }

        if (!renderProps) {
            return res.status(404).end('Not found!');
        }

        const store = configureStore(req.url == '/' ? INITIAL_HOME_STATE : INITIAL_NAVIGATION_STATE);

        fetchComponentData(store, renderProps.components, renderProps.params)
            .then(() => renderToString(
                <Provider store={store}>
                    <RouterContext {...renderProps}/>
                </Provider>
            )).then((html) => {
                const finalState = store.getState();
                res.status(200).end(template(html, finalState));
            }).catch((err) => {
                res.end('Error loading template: ' + err);
            });
    });
});

app.listen(serverConfig.port, (error) => {
    if (!error) {
        console.log(`BestChoiceCare is running on port: ${serverConfig.port}`); // eslint-disable-line
        console.log(`API connected to: ${serverConfig.apiUrl}`);
    } else {
        console.log(`Error starting server on port: ${serverConfig.port}. ERROR: ${error}`);
    }
});