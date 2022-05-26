import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AddAssignment from './addAssignment';

import NavBar from './common/navBar';
import Courses from './courses';
import Login from './Login';
import NotFound from './notfound';
import Signup from './signup';

class Routing extends Component {
    state = {  } 
    render() { 
        return ( //we can set the main element to container 
         <React.Fragment>

                <NavBar/>    
                
            <main className='content'> 
            <Switch>
            <Route path="/courses/:id" component={AddAssignment}/>
            <Route path="/Login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path= "/courses" component={Courses}/>
            <Route path= "/not-found" component={NotFound}/>
            <Redirect from="/" exact to = "/courses"/>
            <Redirect to = "/not-found"/>
            </Switch>
            </main>
         </React.Fragment>
        );
    }
}
 
export default Routing;