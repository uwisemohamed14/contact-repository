import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import LinkContext from '../../context/link/linkContext';



const LinkItem = ({ link }) => {
    const linkContext = useContext(LinkContext);
    const {deleteLink, setCurrent, clearCurrent } = linkContext;
    const {id, about, type, url } = link;
    const onDelete = () => {
        deleteLink(id);
        clearCurrent();
    }
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
                <button className="btn btn-dark btn-sm" onClick={() => setCurrent(link)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>

            </p>
        </div>
    );
};

LinkItem.propTypes = {
    link: PropTypes.object.isRequired,
};

export default LinkItem;
