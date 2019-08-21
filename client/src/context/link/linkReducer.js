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

export default (state, action) => {
    switch(action.type){
        case ADD_LINK:
            return {
                ...state,
                links: [...state.links, action.payload]
            };
        case UPDATE_LINK:
            return {
                ...state,
                links: state.links.map(link => link.id === action.payload.id ? action.payload : link)
            }
        case DELETE_LINK:
            return {
                ...state, 
                links: state.links.filter(link => link.id!==action.payload)
            };
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
                    }
        case FILTER_LINKS:
            return {
                ...state,
                filtered: state.links.filter(link => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return link.type.match(regex) || link.about.match(regex);
                })
            }
        case CLEAR_FILTER:
                    return {
                        ...state,
                        filtered: null
                            }  
        case LINK_ERROR:
            return {
                ...state,
                error: action.payload
            };     
        default:
            return state;

    }
};