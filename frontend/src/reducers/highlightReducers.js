import { ALL_HIGHLIGHTS_FAIL, ALL_HIGHLIGHTS_REQUEST, ALL_HIGHLIGHTS_SUCCESS, CLEAR_ERRORS, CREATE_HIGHLIGHT_FAIL, CREATE_HIGHLIGHT_REQUEST, CREATE_HIGHLIGHT_RESET, CREATE_HIGHLIGHT_SUCCESS, DELETE_HIGHLIGHT_FAIL, DELETE_HIGHLIGHT_REQUEST, DELETE_HIGHLIGHT_RESET, DELETE_HIGHLIGHT_SUCCESS, HIGHLIGHT_DETAILS_FAIL, HIGHLIGHT_DETAILS_REQUEST, HIGHLIGHT_DETAILS_SUCCESS, UPDATE_HIGHLIGHT_FAIL, UPDATE_HIGHLIGHT_REQUEST, UPDATE_HIGHLIGHT_RESET, UPDATE_HIGHLIGHT_SUCCESS } from "../constants/highlightConstants";

// Create Highlights
export const createHighlightsReducer = (state={highlight:{}} ,action) => {

    switch (action.type) {
        case CREATE_HIGHLIGHT_REQUEST:
            case DELETE_HIGHLIGHT_REQUEST:
                case UPDATE_HIGHLIGHT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case CREATE_HIGHLIGHT_SUCCESS:
            case UPDATE_HIGHLIGHT_SUCCESS:
            return {
                ...state,
                loading: false,
                highlight: action.payload.highlight,
                success:action.payload.success
            }
        case DELETE_HIGHLIGHT_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    message: action.payload.message,
                    success:action.payload.success
                }
        case CREATE_HIGHLIGHT_FAIL:
            case DELETE_HIGHLIGHT_FAIL:
                case UPDATE_HIGHLIGHT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }    
        case CREATE_HIGHLIGHT_RESET: 
        case UPDATE_HIGHLIGHT_RESET:  
        return {
            ...state,
            loading: false,
            success:false,
            highlight:null
        }
        case DELETE_HIGHLIGHT_RESET: 
        return {
            ...state,
            loading: false,
            success:false,
            message:null
        }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
    
        default:
            return state;
    }

};


// All Highlights
export const allHighlightsReducer = (state={highlights:[]},action) => {
    switch (action.type) {
        case ALL_HIGHLIGHTS_REQUEST:
            return {
                loading: true,
                highlights: []
            }
        case ALL_HIGHLIGHTS_SUCCESS:
            return {
                ...state,
                loading: false,
                highlights: action.payload.highlights
            }
        case ALL_HIGHLIGHTS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }    
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }    
        default:
            return state;
    }
};

// Single Highlight Details 
export const highlightDetailsReducer = (state={highlight:{}} , action) => {
    switch (action.type) {
        case HIGHLIGHT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case HIGHLIGHT_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                highlight: action.payload.highlight
            }    
        case HIGHLIGHT_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            } 
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }       
    
        default:
            return state;
    }

}
