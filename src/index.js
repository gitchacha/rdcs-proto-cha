import React from 'react';
import ReactDOM from 'react-dom';
import Root from './pages/Root';
import './styles/style.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( <Root />, document.getElementById('root__rdcs-collection'));
serviceWorker.register();