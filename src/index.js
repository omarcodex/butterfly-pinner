import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './vendor/normalize.css';
import './vendor/skeleton.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();