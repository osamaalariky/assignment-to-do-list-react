import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Complete from './common/complete';
import Table from './common/Table';

class CourseTable extends Component {
    columns =[
        { path: "assigName", label: "Assignment", content: coursess => <Link to={`/courses/${coursess._id}`}>{coursess.assigName}</Link>},
        { path: "cate.name", label: "Course"},//
        { path: "dueDate", label: "Due Date"},
        { path: "mark", label: "mark"},
        { key: "completed", label: "completed", content: coursess => <Complete completed={coursess.completed} onClick={() => this.props.oncompleted(coursess)}/>},
        { key: "delete", content: coursess => <button onClick={() => this.props.onDeleted(coursess)} className='btn btn-danger btn-sm' style={{ cursor: "pointer"}}>Delete</button> },
    ]
    render() { 
        const {courses, sortColumn, onSort} = this.props;
        return (
            <Table
            columns={this.columns} 
            data={courses}
            sortColumn={sortColumn} 
            onSort={onSort} />
        );
    }
}
 
export default CourseTable;