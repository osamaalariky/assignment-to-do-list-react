import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/Form';

class Signup extends Form {
    state = {
        data: {email: "", password: ""},
        errors: {}
    }

    schema = {
        name: Joi.string().required().label("Name"),
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
                <h1>Register</h1>
                <form onSubmit={this.handelSubmit}>
                 {this.renderInput("name", "Name",)}
                 {this.renderInput("email", "Email", )}
                 {this.renderInput("password", "Password", "password")}
                 {this.renderButton("Sign up")}      
                </form>
            </div>
        );
    }
}
 
export default Signup;