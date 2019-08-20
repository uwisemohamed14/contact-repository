import React, {Fragment, useContext} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Login from '../auth/Login';
import AuthContext from '../../context/auth/authContext';
import About from '../pages/About';

const Navbar = ({ title, icon }) => {
    const authContext = useContext(AuthContext);

    const { isAuthenticated, logout, user } = authContext;

    const onLogout = () => {
        logout();
    }

    const authLinks = (
        <Fragment>
            <li> {user && user.name} </li>
            <li>
                <a onClick={onLogout} href= "">
                    <i className="fas fa-sign-out-alt"></i> <span className="hide-sm">Logout</span>
                </a>
            </li>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <li>
                    <Link to='/about'>About </Link>
                </li>
             <li>
                    <Link to='/register'> Register </Link>
                </li>
                <li>
                    <Link to='/login'> Login </Link>
                </li>
        </Fragment>
    );
    return (
        <div className="navbar bg-primary">
            <h3>
                <i className={icon}/> {title}
            </h3>
            <ul>
               {isAuthenticated ? authLinks : guestLinks}
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
