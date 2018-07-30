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
                    titleTemplate='React Drum Machine'
                    defaultTitle='React Drum Machine'
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