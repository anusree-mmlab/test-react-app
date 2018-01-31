import React from 'react';
import classes from './Layout.css';
import Aux from '../../hoc/Aux';

const Layout = (props) => (

    <Aux>
        <header>
            <ul>
                <li className={classes.li_link} onClick={props.onMenuClick.bind(this, 'burger')} 
                    style={props.currentMenu==='burger' ? 
                            {backgroundColor:'crimson', color:'white'}  : 
                            {backgroundColor:'grey',color:'black'}
                        }
                    >
                    Burger
                </li>
                <li  className={classes.li_link} onClick={props.onMenuClick.bind(this, 'person')}
                    style={props.currentMenu==='person' ? 
                                {backgroundColor:'crimson', color:'white'}  : 
                                {backgroundColor:'grey',color:'black'}
                            }
                        >
                    Person
                </li>
            </ul>    
        </header>




        <main>
            {props.children}
        </main>




        <footer>
            
        </footer>    
    </Aux>    

);

export default Layout;
