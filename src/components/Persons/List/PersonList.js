import React from 'react';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import Person from '../Person/Person';


const PersonList = (props) => {
    const personList = props.person.map((person, index) => {
        if(person.name === 'Sachin')  {
          return <ErrorBoundary  key={person.id + '-' +index}> <Person
                    name={person.name} 
                    age = {person.age} 
                    onClick = {props.personDeleteClick.bind(this, person.id)}
                  >
                    <p><span className="hobbyLabel">Hobbies Are:</span> 
                    <span className="hobby">Football, Travelling</span></p>
                </Person></ErrorBoundary>
        } else {
          return  <ErrorBoundary  key={person.id + '-' +index}><Person 
                    name={person.name} 
                    age = {person.age} 
                    onClick = {props.personDeleteClick.bind(this, person.id)}
                /> </ErrorBoundary>
        }
      });

    return personList;
}

export default PersonList;