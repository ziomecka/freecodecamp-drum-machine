import React, { Fragment } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HomeView from './home/index';
import routes from '../routes';

const Root: React.StatelessComponent<{}> = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Helmet
                    titleTemplate='React TypeScript Boilerplate - %s'
                    defaultTitle='React TypeScript Boilerplate'
                />
                <main>
                    <Switch>
                        <Route path={routes.ROOT} component={HomeView} />
                    </Switch>
                </main>
            </Fragment>
        </BrowserRouter>
    );
};

export default Root;