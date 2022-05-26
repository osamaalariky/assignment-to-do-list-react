import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/Form';

class Login extends Form {
    state = {
        data: {email: "", password: ""},
        errors: {}
    }

    schema = {
        email: Joi.string().required().email().label("Email"),
        password: Joi.string().required().min(6).label("Password")
    }
    doSubmit = () =>{
        // call the next action after submitting the form
        console.log("Submitted")
    }
    render() { 
        return (
            <div className='container'>
                <h1>Login</h1>
                <form onSubmit={this.handelSubmit}>
                 {this.renderInput("email", "Email", )}
                 {this.renderInput("password", "Password", "password")}
                 {this.renderButton("Login")}      
                </form>
            </div>
        );
    }
}
 
export default Login;