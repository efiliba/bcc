/* eslint no-unused-vars:0 */
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Header from './components/Site/Header';
import Home from './components/Site/Home';
import CarerListContainer from './components/CarerRegister/CarerListContainer';
import CarerRecordContainer from './components/CarerRegister/CarerRecordContainer';
import CarerRegisterContainer from './components/CarerRegister/CarerRegisterContainer';

const routes = (
    <Route path="/" component={Header} >
        <IndexRoute component={Home}/>
        <Route path="carers" component={CarerListContainer}/>
        <Route path="carer/:id" component={CarerRecordContainer}/>
        <Route path="register" component={CarerRegisterContainer}/>
    </Route>
);

export default routes;