import React, {Component} from 'react';

const Sorting = ({ items, valueProperty, textProperty, onItemSelect, selectedItem }) => {
  
  
    return (
        <ul className='list-group'>
            {items.map(item => (
            <li onClick={() => onItemSelect(item)} key={item[valueProperty]} className={item === selectedItem ? "list-group-item active" : "list-group-item" }>
                {item[textProperty]}
            </li>
            ))}
        </ul>
    );
};
 
Sorting.defaultProps = {
valueProperty: "_id",
textProperty: "name"
};

export default Sorting;