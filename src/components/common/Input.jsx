import React from 'react';

const Input = ({name, label, errorMessage, ...rest }) => {
    return ( 
        <div className="form-group">
        <label htmlFor={name}>{label}</label>
    <input 
    //we use the spread opreator to intilaize the other proprties from the form class props object 
    {...rest}
    name={name} 
     id={name}
     className="form-control"
      />
    { errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
    </div>
     );
}
 
export default Input;