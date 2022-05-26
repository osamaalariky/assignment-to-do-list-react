import React from 'react';

const Searching = ({value, onChange}) => {

    return (  
        <nav className="container-fluid bg-light">
        <div className="container-fluid">
            <form className='d-flex' role="search">
                <input 
                className="form-control my"
                name='query'
                type="search"
                value={value}
                placeholder="Search For Assignment"
                aria-label="Search"
                onChange={e => onChange(e.currentTarget.value)}/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
         </div>
    </nav>

    );
}
 
export default Searching;