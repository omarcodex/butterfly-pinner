import React from 'react';
import ReactDOM from 'react-dom';
import './base.css';
import './vendor/normalize.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
