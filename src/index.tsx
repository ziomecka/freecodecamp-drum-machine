import React from 'react';
import ReactDOM from 'react-dom';

import RootView from './views';
import { ROOT_NODE } from './constants';

const render = () => {
    ReactDOM.render(<RootView />, ROOT_NODE);
};

render();