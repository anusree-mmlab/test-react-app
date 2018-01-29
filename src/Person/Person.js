import React from 'react';

const person = (props) => {
    return (
        <div className="card">
            <h3>{props.name}</h3>
            <div>Age: {props.age}</div>
            {props.children}
        </div>
    );
}

export default person;