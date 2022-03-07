//rfc       or     // rafc - for arrow function
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
  

// here h can be H or h in header()
// export default function header({title}) { // props is an object so we can do obj destructuring
export default function Header(props) {
    return (
        // these are not html but jsx - so use jsx syntax - use className instead class only
        < nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    {props.searchBar ? <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> : "no search bar"}
                </div>
            </div>
        </nav >
    )
}
Header.defaultProps = {
    title: "Default Title",
    searchBar: true
}

// take care of propTypes and PropTypes(only this one is imported from prop-types)
Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
}