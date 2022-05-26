import React, { Component } from 'react';

const DropDown = ({ name, label, options, errorMessage, ...rest }) => {
    return ( 
        <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...rest} className="form-control">
        <option value="" />
        {options.map(option => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
    </div>
     );
}
 
export default DropDown;