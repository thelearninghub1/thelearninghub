import { GET_DASHBOARD_FAIL , GET_DASHBOARD_REQUEST , GET_DASHBOARD_SUCCESS , CLEAR_ERRORS, DASHBOARD_DETAILS_FAIL, DASHBOARD_DETAILS_REQUEST, DASHBOARD_DETAILS_SUCCESS, CREATE_DASHBOARD_REQUEST, CREATE_DASHBOARD_SUCCESS, CREATE_DASHBOARD_FAIL, DELETE_DASHBOARD_FAIL, DELETE_DASHBOARD_REQUEST, DELETE_DASHBOARD_SUCCESS, UPDATE_DASHBOARD_FAIL, UPDATE_DASHBOARD_REQUEST, UPDATE_DASHBOARD_SUCCESS } from "../constants/dashboardConstants";

import axios from 'axios';

// Get All Dashboard Data
export const allDashboardAction = () => async (dispatch) => {
    try {
        dispatch({type:GET_DASHBOARD_REQUEST});

        const {data} = await axios.get(`/api/v1/dashboards`);

        dispatch({
            type:GET_DASHBOARD_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type:GET_DASHBOARD_FAIL,
            payload: error.response.data.message,
        })
    }
};


// Get Dashboard Details  
export const dashboardDetailsAction = (id) => async (dispatch) => {
    try {
        dispatch({type:DASHBOARD_DETAILS_REQUEST});

        const {data} = await axios.get(`/api/v1/dashboard/${id}`)

        dispatch({
            type:DASHBOARD_DETAILS_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type:DASHBOARD_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
};



// Create Dashboard Action  --Admin
export const createDashboardAction = (newDashboardData) => async (dispatch) => {
    try {
        dispatch({type:CREATE_DASHBOARD_REQUEST});

        const config = {headers: {"Content-Type":"multipart/form-data"}}

        const {data} = await axios.post(`/api/v1/dashboard/create`,newDashboardData,config);

        dispatch({
            type:CREATE_DASHBOARD_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type:CREATE_DASHBOARD_FAIL,
            payload: error.response.data.message
        })
    }
};



// Create Dashboard Action  -- Super Admin
export const createDashboardSuper = (newDashboardData) => async (dispatch) => {
    try {
        dispatch({type:CREATE_DASHBOARD_REQUEST});

        const config = {headers: {"Content-Type":"multipart/form-data"}}

        const {data} = await axios.post(`/api/v1/super/dashboard/create`,newDashboardData,config);

        dispatch({
            type:CREATE_DASHBOARD_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type:CREATE_DASHBOARD_FAIL,
            payload: error.response.data.message
        })
    }
};


// Delete Dashboard   ---Admin
export const deleteDashboardAction = (id) => async (dispatch) => {
    try {
        dispatch({type:DELETE_DASHBOARD_REQUEST});

        const config = {headers: {"Content-Type": "application/json"}};

        const {data} = await axios.delete(`/api/v1/super/dashboard/${id}`,config);

        dispatch({
            type:DELETE_DASHBOARD_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:DELETE_DASHBOARD_FAIL,
            payload:error.response.data.message
        })
    }
};

// Update Dashboard  --Admin
export const updateDashboardAction = (id,newdashboardData) => async (dispatch) => {
    try {
        dispatch({type:UPDATE_DASHBOARD_REQUEST});

        const config = { headers:{ 'Content-Type': 'application/json' } } 
        const {data} = await axios.put(`/api/v1/dashboard/${id}`,newdashboardData,config);

        dispatch({
            type:UPDATE_DASHBOARD_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type:UPDATE_DASHBOARD_FAIL,
            payload:error.response.data.message
        })
    }
}


// Update Dashboard  -- Super Admin
export const updateDashboardSuperAction = (id,newdashboardData) => async (dispatch) => {
    try {
        dispatch({type:UPDATE_DASHBOARD_REQUEST});

        const config = { headers:{ 'Content-Type': 'application/json' } } 
        const {data} = await axios.put(`/api/v1/super/dashboard/${id}`,newdashboardData,config);

        dispatch({
            type:UPDATE_DASHBOARD_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type:UPDATE_DASHBOARD_FAIL,
            payload:error.response.data.message
        })
    }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({type:CLEAR_ERRORS});
}