import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Login from '../auth/Login';

const Navbar = ({ title, icon }) => {
    return (
        <div className="navbar bg-primary">
            <h3>
                <i className={icon}/> {title}
            </h3>
            <ul>
                <li>
                    <Link to='/'> Home </Link>
                </li>
                <li>
                    <Link to='/about'> About </Link>
                </li>
                <li>
                    <Link to='/register'> Register </Link>
                </li>
                <li>
                    <Link to='/login'> Login </Link>
                </li>
            </ul>
            
        </div>
    )
}

Navbar.propTypes= {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
}

Navbar.defaultProps = {
    title: 'Link Repository',
    icon: 'fas fa-link'
}

export default Navbar
