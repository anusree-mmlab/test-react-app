import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

function Person(props) {
    return (
        <div className="card">
            <h3>{props.name}</h3>
            <div>Age: {props.age}</div>
        </div>
    );
}

ReactDOM.render(<Person name="Roger" age="36"/>, document.querySelector('#test-app'));

registerServiceWorker();
