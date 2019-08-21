import React, { useReducer } from 'react';
import axios from 'axios';
// import uuid from 'uuid';
import LinkContext from './linkContext'; //Try small l if dont work
import linkReducer from './linkReducer';
import {
    ADD_LINK,
    DELETE_LINK,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_LINK,
    FILTER_LINKS,
    CLEAR_FILTER,
    LINK_ERROR
} from '../types';

const LinkState = props => {
    const initialState = {
        links: [],
        current: null,
        filtered: null,
        error: null
    };

    const [state, dispatch] = useReducer(linkReducer, initialState);

    //All of the actions.

    //Add Links

    const addLink = async link => {
        const config = { 
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try{
            const res= await axios.post('/api/links', link, config);
            dispatch({type: ADD_LINK, payload: res.data});

        }
        catch(err){
            dispatch({ type: LINK_ERROR,
            payload: err.response.msg})
        }
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

    //Filter Links
    const filterLinks = text => {
        dispatch({type: FILTER_LINKS, payload: text});
    };

    //Clear Links

    const clearFilter = () => {
        dispatch({type: CLEAR_FILTER});
    };

    return (
        <LinkContext.Provider value={{links: state.links,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addLink, 
        deleteLink,
        setCurrent,
        clearCurrent,
        updateLink,
        filterLinks,
        clearFilter}}>
            { props.children }
        </LinkContext.Provider>
    )
};

export default LinkState;