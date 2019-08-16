import React from 'react';
import PropTypes from 'prop-types';


const LinkItem = ({ link }) => {
    const {id, about, type, url } = link;
    return (
        <div className='card bg-light'>
            <h3 className="text-primary text-left">
                {about}{' '}<span style={{ float: 'right'}} className={'badge badge-primary'}>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
            </h3>
            <ul className="list">
                {url && (<li>
                    <i className="fas fa-link" /> <a href={'https://' + url}>{url}</a>
                </li>)}
            </ul>
            <p>
                <button className="btn btn-dark btn-sm">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>

            </p>
        </div>
    );
};

LinkItem.propTypes = {
    link: PropTypes.object.isRequired,
};

export default LinkItem;
