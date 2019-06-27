import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import Body from './body';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Body />, document.getElementById('body'));

serviceWorker.unregister();
