import React, { Component } from 'react';
import { getCategory } from '../services/categoryService';
import { getCourses } from "../services/assignmentService";
import { paginate } from '../utils/paginate';
import Pagination from './common/pagination';
import Sorting from './common/sorting';
import CourseTable from './courseTable';
import _ from "lodash";
import { Route, Switch, Redirect, NavLink, Link } from "react-router-dom";
import Searching from './common/searching';

class Courses extends Component {
        state = {
            courses: [],
            category: [],
            pageSize: 6,
            currentPage: 1,
            searchQuery: "",
            selectedCategory: null,
            sortColumn: {path: "assigName", order: "asc"}
        };

        componentDidMount(){
            const category = [{_id: "", name: "All Courses"}, ...getCategory()]
            this.setState({courses: getCourses(), category});
        }
        handledelete = coursess => {
            const courses = this.state.courses.filter(c => c._id !== coursess._id);
            this.setState ({courses})
        }
        
        handlecompleted = (coursess) => {
            const courses = [...this.state.courses];
            const index = courses.indexOf(coursess);
            courses[index] = {...courses[index]};
            courses[index].completed = !courses[index].completed;
            this.setState({courses})
        }
        handleChange = (page) =>{
            this.setState({currentPage: page});
        }
        handleCategorySelect = (cate) => {
            this.setState ({selectedCategory: cate, searchQuery: "", currentPage: 1 })
        } 
        handleSort = (sortColumn) => {
            
            this.setState({ sortColumn})
        }
        handleSearch=(query) => {
            this.setState({searchQuery: query, selectedCategory: null, currentPage: 1})
        }
        getPageData = () => {
            const {pageSize, currentPage, sortColumn, searchQuery ,selectedCategory, courses: allcourses} = this.state;
            let filterd = allcourses;
            if (searchQuery)
            filterd = allcourses.filter(a => a.assigName.toLowerCase().startsWith(searchQuery.toLowerCase()));
            else if (selectedCategory && selectedCategory._id)
                filterd = allcourses.filter(a => a.cate._id === selectedCategory._id)
            
            const sorted = _.orderBy(filterd, [sortColumn.path], [sortColumn.order])
            const courses = paginate(sorted, currentPage, pageSize)
            return {totalCount: filterd.length, data: courses}
        }

        renderCourses (){
        
            <ul>
                {this.state.courses.map(a => <li >{a}</li>)}
                    </ul>
        }
    render() { 
        const {length : calculate} = this.state.courses;
        const {pageSize, currentPage, sortColumn, searchQuery } = this.state;

        if (calculate === 0) 
        return <p>You Haven't added any assignment</p>;
        const {totalCount, data : courses} = this.getPageData();
        return (
            <React.Fragment>

                   
                    
                
            <div className='row'>
            <div className='col-3'>
            <Sorting
            items={this.state.category}
            selectedItem={this.state.selectedCategory}
            onItemSelect={this.handleCategorySelect}/>
            </div>
            <div className='col'>

           
            <Link
            to="/courses/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            Add New Assignment 
          </Link>
            <p>Total Assignments: {totalCount}</p>
            
            <Searching value={searchQuery} onChange={this.handleSearch}/>
        <CourseTable 
        courses={courses}
        oncompleted={this.handlecompleted}
        sortColumn={sortColumn} 
        onSort= {this.handleSort}
        onDeleted={this.handledelete}/>
           
        <Pagination
         itemCount={totalCount} 
         pageSize={pageSize}
         currentPage={currentPage}
         onpageChange={this.handleChange}/>
            </div>
      
        </div>
         
         </React.Fragment>
        );
    }
}
 
export default Courses;