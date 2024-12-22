import { ALL_LESSONS_FAIL , ALL_LESSONS_REQUEST , ALL_LESSONS_SUCCESS , CLEAR_ERRORS, CREATE_LESSON_FAIL, CREATE_LESSON_REQUEST, CREATE_LESSON_RESET, CREATE_LESSON_SUCCESS, DELETE_LESSON_FAIL, DELETE_LESSON_REQUEST, DELETE_LESSON_RESET, DELETE_LESSON_SUCCESS, LESSON_DETAILS_FAIL, LESSON_DETAILS_REQUEST, LESSON_DETAILS_SUCCESS, LESSON_FILTER_FAIL, LESSON_FILTER_REQUEST, LESSON_FILTER_SUCCESS, UPDATE_LESSON_FAIL, UPDATE_LESSON_REQUEST, UPDATE_LESSON_RESET, UPDATE_LESSON_SUCCESS } from "../constants/lessonConstants";


// All Lessons
export const allLessonsReducer = (state={lesson:[]},action) => {

    switch (action.type) {
        case ALL_LESSONS_REQUEST:
            case LESSON_FILTER_REQUEST:
            return {
                loading:true,
                lesson:[]
            }
            
        case ALL_LESSONS_SUCCESS:
            return {
                ...state,
                loading:false,
                lesson:action.payload.lesson
            }
        case LESSON_FILTER_SUCCESS:
            return {
                ...state,
                loading:false,
                lessonsCount:action.payload.lessonsCount,
                resultPerPage:action.payload.resultPerPage,
                lesson:action.payload.lesson

            }        

        case ALL_LESSONS_FAIL:
            case LESSON_FILTER_FAIL:
            return {
                ...state,
                loading:false,
                error:action.payload
            }    
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null
            }    
    
        default:
            return state
    }

};

// Lesson Details Reducer 
export const lessonDetailsReducer = (state={lesson:{}} ,action) => {

    switch (action.type) {
        case LESSON_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case LESSON_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                lesson:action.payload.lesson
            }    
        case LESSON_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null
            }    

        default:
            return state;
    }

};

// Create Lesson --Admin
export const createLessonReducer = (state={lesson:{}}, action) => {
    switch (action.type) {
        case CREATE_LESSON_REQUEST:
            case UPDATE_LESSON_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case CREATE_LESSON_SUCCESS:
            case UPDATE_LESSON_SUCCESS:
            return {
                ...state,
                loading: false,
                lesson: action.payload.lesson,
                success: action.payload.success
            }    
        case CREATE_LESSON_FAIL:
            case UPDATE_LESSON_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }    
        case CREATE_LESSON_RESET:
            case UPDATE_LESSON_RESET:
            return {
                ...state,
                loading: false,
                lesson:null,
                success:false
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null
            }    
        default:
            return state;
    }
};


// Delete Lesson Reducer  -- Super Admin
export const deletelessonReducer = (state={lesson:{}}, action) => {
    switch (action.type) {
        case DELETE_LESSON_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case DELETE_LESSON_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload.message,
                success: action.payload.success
            }    
        case DELETE_LESSON_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }    
        case DELETE_LESSON_RESET:
            return {
                ...state,
                message:null,
                success:false
            }  
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null
            }      
    
        default:
            return state;

    }

}