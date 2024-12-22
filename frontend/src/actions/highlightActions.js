import { ALL_HIGHLIGHTS_FAIL, ALL_HIGHLIGHTS_REQUEST, ALL_HIGHLIGHTS_SUCCESS, CLEAR_ERRORS, CREATE_HIGHLIGHT_FAIL, CREATE_HIGHLIGHT_REQUEST, CREATE_HIGHLIGHT_SUCCESS, DELETE_HIGHLIGHT_FAIL, DELETE_HIGHLIGHT_REQUEST, DELETE_HIGHLIGHT_SUCCESS, HIGHLIGHT_DETAILS_FAIL, HIGHLIGHT_DETAILS_REQUEST, HIGHLIGHT_DETAILS_SUCCESS, UPDATE_HIGHLIGHT_FAIL, UPDATE_HIGHLIGHT_REQUEST, UPDATE_HIGHLIGHT_SUCCESS } from "../constants/highlightConstants";

import axios from 'axios';

// Create Highlight  -- Super Admin
export const createHighlightAction = (newData) => async (dispatch) => {
    try {
        dispatch({type: CREATE_HIGHLIGHT_REQUEST})

        const config  =  {headers :{'Content-Type': 'multipart/form-data'}};

        const {data} = await axios.post('/api/v1/highlight/create',newData,config);

        dispatch({
            type: CREATE_HIGHLIGHT_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: CREATE_HIGHLIGHT_FAIL,
            payload: error.response.data.message
        })
    }
};


// All Highlight Action
export const allHighlightsAction = () => async (dispatch) => {
    try {
        dispatch({type: ALL_HIGHLIGHTS_REQUEST});

        const {data} = await axios.get('/api/v1/highlights');

       dispatch({
        type:ALL_HIGHLIGHTS_SUCCESS,
        payload: data
       })
        
    } catch (error) {
        dispatch({
            type: ALL_HIGHLIGHTS_FAIL,
            payload: error.response.data.message
        })
    }
};


// Delete Highlight
export const deleteHighlightAction = (id) => async (dispatch) => {
    try {
        dispatch({type: DELETE_HIGHLIGHT_REQUEST});

        const {data} = await axios.delete(`/api/v1/highlight/${id}`);

        dispatch({
            type: DELETE_HIGHLIGHT_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type:DELETE_HIGHLIGHT_FAIL,
            payload: error.response.data.message
        })
    }
}

// Highlight Details 
export const highlightDetailsAction = (id) => async (dispatch) => {
    try {
        dispatch({type: HIGHLIGHT_DETAILS_REQUEST});

        const {data} = await axios.get(`/api/v1/highlight/${id}`);

        dispatch({
            type: HIGHLIGHT_DETAILS_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: HIGHLIGHT_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}


// Update Highlight  -- 
export const updateHighlightsAction = (id,newHighData) => async (dispatch) => {
    try {
        dispatch({type: UPDATE_HIGHLIGHT_REQUEST});

        const config  =  {headers :{'Content-Type': 'multipart/form-data'}};

        const {data} = await axios.put(`/api/v1/highlight/${id}`,newHighData,config);

        dispatch({
            type: UPDATE_HIGHLIGHT_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: UPDATE_HIGHLIGHT_FAIL,
            payload: error.response.data.message
        })
    }
}

// Clear Errors 
export const clearErrors = () => async (dispatch) => {
    dispatch({type: CLEAR_ERRORS})
}