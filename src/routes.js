import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MainLayout from './hoc/mainLayout';

import Home from './components/home';
import Contact from './components/contact';
import Header from './components/header';

const Routes = () => (
    <BrowserRouter>
        <Header />
        <MainLayout>
            <Switch>
                <Route path="/contact" component={Contact} />
                <Route path="/" component={Home} />
            </Switch>
        </MainLayout>
    </BrowserRouter>
)


export default Routes