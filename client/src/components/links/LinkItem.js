import React from 'react';

const LinkItem = ({ link }) => {
    const {id, about, type, url } = link;
    return (
        <div className='card bg-light'>
            <h3 className="text-primary text-left">
                {about}{' '}<span className={'badge badge-primary'}>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
            </h3>
        </div>
    )
}

export default LinkItem;
