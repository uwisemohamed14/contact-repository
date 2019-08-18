import React, { useReducer } from 'react';
import uuid from 'uuid';
import LinkContext from './linkContext'; //Try small l if dont work
import linkReducer from './linkReducer';
import {
    ADD_LINK,
    DELETE_LINK,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_LINK,
    FILTER_LINKS,
    CLEAR_FILTER
} from '../types';

const LinkState = props => {
    const initialState = {
        links: [
            {
                id: 1,
                about: 'React',
                type: 'WebDev',
                url: 'www.google.com'
            },
            {
                id: 2,
                about: 'Django',
                type: 'WebDev',
                url: 'www.udemy.com'
            },
            {
                id: 3,
                about: 'Search Engines',
                type: 'General',
                url: 'www.google.com'
            }
        ],
        current: null
    };

    const [state, dispatch] = useReducer(linkReducer, initialState);

    //All of the actions.

    //Add Links

    const addLink = link => {
        link.id= uuid.v4();
        dispatch({type: ADD_LINK, payload: link});
    };

    //Delete link
    const deleteLink = id => {
        dispatch({type: DELETE_LINK, payload: id});
    };

    //Set Current Link
    const setCurrent = link => {
        dispatch({type: SET_CURRENT, payload: link});
    };

    //Clear current Link
    const clearCurrent = () => {
        dispatch({type: CLEAR_CURRENT});
    };

    //Update Link

    const updateLink = link => {
        dispatch({type: UPDATE_LINK, payload: link});
    };

    return (
        <LinkContext.Provider value={{links: state.links,
        current: state.current,
        addLink, 
        deleteLink,
        setCurrent,
        clearCurrent,
        updateLink}}>
            { props.children }
        </LinkContext.Provider>
    )
};

export default LinkState;