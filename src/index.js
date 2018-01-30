import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

//classes are global even though the card class in defined inside the Person.css file
/* ReactDOM.render(<div className="card" >Test</div>, document.getElementById('test-app')); */

registerServiceWorker();
