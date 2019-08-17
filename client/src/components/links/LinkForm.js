import React, {useState, useContext} from 'react';
import LinkContext from '../../context/link/linkContext';

const LinkForm = () => {
    const linkContext = useContext(LinkContext);
    const [link, setLink] =  useState({
        about: '',
        type: '',
        url: ''
    });

    const {about, type, url} = link;

    const onChange = (e) => setLink({ ...link, [e.target.name]: e.target.value});

    const onSubmit = (e) => {
        e.preventDefault();
        linkContext.addLink(link);
        setLink({
            about: '',
            type: '',
            url: ''
        })
    }
    return (
        <form onSubmit={onSubmit}>
            <input 
            type="text" 
            placeholder="What's the URL about?" 
            name="about" 
            value={about} 
            onChange={onChange}/>
            <input 
            type="text" 
            placeholder="Categorize the URL" 
            name="type" 
            value={type} 
            onChange={onChange}/>
            <input 
            type="text" 
            placeholder="Paste the URL here" 
            name="url" 
            value={url} 
            onChange={onChange}/>
            <div>
                <input type="submit" value="Add link" className="btn btn-dark"/>
            </div>
        </form>
    )
}

export default LinkForm;
