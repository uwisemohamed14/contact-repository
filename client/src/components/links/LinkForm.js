import React, {useState, useContext, useEffect} from 'react';
import LinkContext from '../../context/link/linkContext';

const LinkForm = () => {
    const linkContext = useContext(LinkContext);

    const {addLink,clearCurrent,updateLink, current} = linkContext;
    useEffect(() => {
        if(current!==null){
            setLink(current);
        }
        else{
            setLink({
                about: '',
                type: '',
                url: ''
            })
        }
    }, [linkContext, current]);
    const [link, setLink] =  useState({
        about: '',
        type: '',
        url: ''
    });

    const {about, type, url} = link;

    const onChange = (e) => setLink({ ...link, [e.target.name]: e.target.value});

    const onSubmit = (e) => {
        e.preventDefault();
        if(current===null){
            addLink(link);
        }
        else{
            updateLink(link);
        }
        clearAll();
    };

    const clearAll = () => {
        clearCurrent();
    }
    return (
        <form onSubmit={onSubmit}>
            <h2 className='text-grey'>{current ? 'Edit Link' : 'Add Link' }</h2>
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
                <input type="submit" value={current ? 'Update Link' : 'Add Link' } className="btn btn-dark btn-block"/>
            </div>
            {current && <div>
                <button className="btn btn-light btn-block" onClick={clearAll}>Clear</button>
            </div>}
        </form>
    )
}

export default LinkForm;
