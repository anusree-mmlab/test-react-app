import React from 'react';
import './Person.css';

const person = (props) => {
    //This ErrorBoundary Can be used when, 
   //sometimes there is a chance to break the code and this work in production mode
   //The error need to be thrown from the the child component. Commented for now
/*    if(Math.random() > .5) {
    throw new Error('something went wrong');
   } */


    return (
        <div className="card">
            <div>
                <div style={{textAlign:'right',fontWeight: 'normal', color:'red', cursor:'pointer',fontSize:'10px'}} 
                    onClick={props.onClick}>DELETE</div> 
                <h3>{props.name}</h3>
            </div>
            <div>Age: {props.age}</div>
            {props.children}
        </div>
    );
}

export default person;