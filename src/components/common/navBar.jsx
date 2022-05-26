import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class NavBar extends Component {
    state = {  } 
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-ligh">
  
    <Link className="navbar-brand" to="/">Student</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-item nav-link" to="/courses">Assigmnets</NavLink>
        <NavLink className="nav-item nav-link" to="/Login">Sign In</NavLink>
        <NavLink className="nav-item nav-link" to="/signup">Sign Up</NavLink>
        
        
      </div>
    </div>
 
</nav>
        );
    }
}
 
export default NavBar;