import { ALL_LESSONS_FAIL , ALL_LESSONS_REQUEST , ALL_LESSONS_SUCCESS , CLEAR_ERRORS, CREATE_LESSON_FAIL, CREATE_LESSON_REQUEST, CREATE_LESSON_SUCCESS, DELETE_LESSON_FAIL, DELETE_LESSON_REQUEST, DELETE_LESSON_SUCCESS, LESSON_DETAILS_FAIL, LESSON_DETAILS_REQUEST, LESSON_DETAILS_SUCCESS, LESSON_FILTER_FAIL, LESSON_FILTER_REQUEST, LESSON_FILTER_SUCCESS, UPDATE_LESSON_FAIL, UPDATE_LESSON_REQUEST, UPDATE_LESSON_SUCCESS } from "../constants/lessonConstants";
import axios from "axios";


// All Lessons 
export const allLessonActions = () => async (dispatch) => {
    try {
        dispatch({type:ALL_LESSONS_REQUEST});

        const {data} = await axios.get(`/api/v1/lessons`);

         dispatch({
            type:ALL_LESSONS_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type:ALL_LESSONS_FAIL,
            payload: error.response.data.message
        })
    }
};

// All Lessons Filter
export const allFilterLessonActions = (currentPage = 1) => async (dispatch) => {
    try {
        dispatch({type:LESSON_FILTER_REQUEST});

        let link  =  `/api/v1/lesson?page=${currentPage}`

        const {data} = await axios.get(link);

         dispatch({
            type:LESSON_FILTER_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type:LESSON_FILTER_FAIL,
            payload: error.response.data.message
        })
    }
};


//  Create Lesson  -- Super Admin

export const superCreateLessonAction = (newLessonData) => async (dispatch) => {
    try {

        dispatch({type:CREATE_LESSON_REQUEST});

        const config  =  {headers :{'Content-Type': 'multipart/form-data'}};

        const {data} = await axios.post(`/api/v1/super/lesson/create`,newLessonData,config);

        dispatch({
            type:CREATE_LESSON_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type:CREATE_LESSON_FAIL,
            payload:error.response.data.message
        })
    }
}

//   lesson Details 
export const lessonDetailsAction = (id) => async (dispatch) => {

    try {

        dispatch({type:LESSON_DETAILS_REQUEST})

        const {data}  = await axios.get(`/api/v1/lesson/${id}`);

        dispatch({
            type:LESSON_DETAILS_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type:LESSON_DETAILS_FAIL,
            payload:error.response.data.message
        })
    }
};

// Create Lesson Action -- Admin
export const createLessonAction = (newLessonData) => async (dispatch) => {
    try {

        dispatch({type:CREATE_LESSON_REQUEST});

        const config  =  {headers :{'Content-Type': 'multipart/form-data'}};

        const {data} = await axios.post(`/api/v1/admin/lesson/create`,newLessonData,config);

        dispatch({
            type:CREATE_LESSON_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type:CREATE_LESSON_FAIL,
            payload:error.response.data.message
        })
    }
}

// Update Lesson --Admin
export const updateLessonAction = (id,newLessonData) => async (dispatch) => {
    try {

        dispatch({type:UPDATE_LESSON_REQUEST});

        const config = {headers: {'Content-Type': 'multipart/form-data'}};

        const {data} = await axios.put(`/api/v1/admin/lesson/${id}`,newLessonData,config);

        dispatch({
            type:UPDATE_LESSON_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type:UPDATE_LESSON_FAIL,
            payload: error.response.data.message
        })
    }
}


// Update Lesson -- Super Admin
export const superUpdateLessonAction = (id,newLessonData) => async (dispatch) => {
    try {

        dispatch({type:UPDATE_LESSON_REQUEST});

        const config = {headers: {'Content-Type': 'multipart/form-data'}};

        const {data} = await axios.put(`/api/v1/super/lesson/${id}`,newLessonData,config);

        dispatch({
            type:UPDATE_LESSON_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type:UPDATE_LESSON_FAIL,
            payload: error.response.data.message
        })
    }
}

// Delete Lesson -- Super Admin
export const deleteLessonAction = (id) => async (dispatch) => {
    try {
        dispatch({type:DELETE_LESSON_REQUEST})

        const {data} = await axios.delete(`/api/v1/super/lesson/${id}`);

        dispatch({
            type:DELETE_LESSON_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:DELETE_LESSON_FAIL,
            payload:error.response.data.message
        })
    }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({type:CLEAR_ERRORS})
}