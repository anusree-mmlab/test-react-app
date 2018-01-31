import React, { Component } from 'react';
import _ from 'lodash';
import classes from './App.css';
import PersonList from '../components/Persons/List/PersonList';
import NewPerson from '../components/Persons/Add/NewPerson';
import Burger from './Burger';

import Layout from '../components/Layout/Layout';
import WithClass from '../hoc/WithClass';

//import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

const Styles = {
  personContainer: {
      width:'90%',
      height:'auto',
      display:'inline-block',
      textAlign: 'left',
      marginLeft:'10%'
  }
}

class App extends Component {
  state = {
    person : [
      {id: "1AA", name: "Roger", age:36 },
      {id: "1AB", name: "Sachin", age:44 },
      {id: "1AC", name: "Sindhu", age:25 },
    ],
    menuLink : 'burger'
  }

  addValueHandler() {
    const name = document.querySelector('#new_name').value;
    const age = document.querySelector('#age').value;

    //console.log('Add Value', name, age);

    if (name && age) {
      const currentPersonState = [...this.state.person];

      const newPerson = {id:Math.floor(Math.random() * 11), name: name, age: age};
      currentPersonState.push(newPerson);
      //console.log(currentPersonState);

      this.setState({
        person : currentPersonState
      });
      document.querySelector('#add_error_msg').innerHTML = '';
    } else {
      document.querySelector('#add_error_msg').innerHTML = "Please enter the values";
    }
  }

  personDeleteHandler(personId) {
    const currentPersonState = [...this.state.person];
    const personIndex = _.findIndex(currentPersonState, {'id': personId});

    if(personIndex !== -1) {
      const deletedPerson = currentPersonState.splice(personIndex, 1);

      this.setState({
        person : currentPersonState
      })
    }
  }

  menuClickHandler(clickSource) {
    //console.log('Menu click', clickSource);

    switch(clickSource) {
      case 'burger':
          this.setState({
            menuLink: clickSource
          });
        break;

      case 'person':
        this.setState({
          menuLink: clickSource
        });
        break;  
       
      default:    
        this.setState({
          menuLink: 'person'
        });
        break;  
    }
  }

  render() {

/*     return (
      <div className={classes.App}>
       <h3>T App</h3>

       <hr/>
       <NewPerson addValueClick = {this.addValueHandler.bind(this)} />
       
       <hr/>
       <div styles={Styles.personContainer}>
          <PersonList person={this.state.person} personDeleteClick={this.personDeleteHandler.bind(this)}/>
       </div>
      </div>
    ); */

    let uiComponent = null;

    switch(this.state.menuLink) {
      case 'burger':
        uiComponent = <Burger/>;
        break;

      case 'person':
       uiComponent = (
          <div>
            <hr/>
            <NewPerson addValueClick = {this.addValueHandler.bind(this)} />

            <hr/>
            <div styles={Styles.personContainer}>
              <PersonList person={this.state.person} personDeleteClick={this.personDeleteHandler.bind(this)}/>
            </div>
          </div>
        );
        break;  
       
      default:    
        uiComponent = <p>Nothing to display</p>;
        break;  
    }



    return(
      <Layout onMenuClick={this.menuClickHandler.bind(this)} currentMenu={this.state.menuLink}>
       {uiComponent}
      </Layout>
    );

  }
}

export default WithClass(App, classes.App);
//export default App;
