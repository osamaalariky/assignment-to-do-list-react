import React, { Component } from 'react';
import { getCategory } from '../services/categoryService';
import { getCourse, savecCourse } from "../services/assignmentService";
import Joi from 'joi-browser';
import Form from './common/Form';
class AddAssignment extends Form {
    state = {
        data: {
          assigName: "",
          categoryId: "",
          dueDate: "",
          mark: "",
          description: ""
        },
        category: [],
        errors: {}
    };
    schema={
        _id: Joi.string(),
        assigName: Joi.string()
          .required()
          .label("Assignment Name"),
        categoryId: Joi.string()
          .required()
          .label("Course"),
          dueDate: Joi
          .date()
          .required()
          .label("Due Date"),
        mark: Joi.number()
          .required()
          .min(0)
          .max(100)
          .label("mark (100%)"),
          description: Joi.string()
          .required()
          .label("Assignment Description"),

     }


        componentDidMount(){
            const category = getCategory(); //first step we get category from the service
            this.setState({category}); // update the state

            const courseId = this.props.match.params.id; //this will read the ID paramater in the route and store it in courseId
            if (courseId === "new") return; //if it equals to new it will return true 

            const course = getCourse(courseId); // else if it is not new this will get the course with the given Id
            if (!course) return this.props.history.replace("/not-found");// if it doesn't exist it will redirect the user to the not found page

            this.setState({data: this.mapToViewModel(course)}) //upating the state, and we are setting the data proprtey but we are not setting that to the course object that we get from the server, because the restful API that we have on the server are general purpose
        }
        
        mapToViewModel(course){
        return {
             //here we are returning the new course object
             _id: course._id,
             assigName: course.assigName,
             categoryId: course.cate._id,
             dueDate: course.dueDate,
             mark: course.mark,
             description: course.description
        };
    }
    doSubmit = () =>{
      // call the next action after submitting the form
      savecCourse(this.state.data);
      this.props.history.push("/courses")
      //after we submit the form we call the save courses function from the server
  }
  render() { 
    return (
        <div className='container'>
            <h1>Add New Assignment</h1>
            <form  onSubmit={this.handelSubmit}>
            {this.renderInput("assigName", "Assignment Name")}
            {this.renderSelect("categoryId", "Course", this.state.category)}
            {this.renderInput("mark", "mark (100%)", "number")}
            {this.renderInput("dueDate", "Due Date", "date")}
            {this.renderInputTextArea("description", "Assignment Description",)}
            {this.renderButton("Add")}

            </form>
        </div>
    );
  }
}
 
export default AddAssignment;