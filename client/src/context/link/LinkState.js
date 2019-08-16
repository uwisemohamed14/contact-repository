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
                url: 'www.medium.com'
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
        ]
    };

    const [state, dispatch] = useReducer(linkReducer, initialState);

    //All of the actions.

    return (
        <LinkContext.Provider value={{links: state.links}}>
            { props.children }
        </LinkContext.Provider>
    )
};

export default LinkState;