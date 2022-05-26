import React, { Component } from 'react';

class Complete extends Component {
    state = {  } 
    render() { 
        let classes = "fa fa-check-square-o" 
        if (!this.props.completed) classes= "fa fa-square-o"
        return <i onClick={this.props.onClick} className={classes} style={{ cursor: "pointer", borderColor: "black", color:"green" }} aria-hidden="true"></i>;
    }
}
 
export default Complete;